import tripModel from "../models/tripModel.js";
import mongoose from 'mongoose'


const createTrip = async (req, res) => {
    try {
        const {startDate, endDate, lArrivalTime, lDepartureTime, dArrivalTime, dDepartureTime} = req.body;

        // Extract user details
        const organiser = req.user.id;
        const userName = req.user.userName;

        // Validating the required fields
        if (!startDate || !endDate ){
            return res.json({ success:false, message: "Please fill all the fields"})
        }

        // Convert string dates to Date objects
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Checking  the overlapping of trips
        const existingTrip = await tripModel.findOne({organiser, 
            $or: [
                { startDate: { $lte: end}, endDate: { $gte: start } }
            ]
        })

        if (existingTrip) {
            return res.json({ success: false, message: "You already have a trip scheduled within these dates."})
        }

        // Create a new trip
        const newTrip = new tripModel({ organiser, startDate, endDate, lArrivalTime, lDepartureTime, dArrivalTime, dDepartureTime })
        await newTrip.save()
        res.json({success:true, message: "You created the trip successfully", message: newTrip._id})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }

    

}

const getTrips = async (req,res) => {
    try {
        // Extract the user Id.
        const userId = req.user.id;

        // Find the trips.
        const trips = await tripModel.find({
            $or: [{ organiser: userId}, { participants: userId }],
        }).populate("organiser", "userName").populate("participants", "userName").select("_id name");

        res.json({ success: true, trips})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const getTrip = async (req,res) => {
    try {
        // Extract the user Id.
        const userId = req.user.id;

        // Extract the trip Id
        const { tripId } = req.params;

        // Validate if tripId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(tripId)) {
            return res.status(400).json({ success: false, message: "Invalid trip ID format." });
        }

        // Find the trips.
        const trip = await tripModel.findOne({
            _id: tripId,
            $or: [{ organiser: userId}, { participants: userId }],
        }).populate("organiser", "userName").populate("participants", "userName");

        res.json({ success: true, trip})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const removeTrip = async (req, res) => {
    try {
        const { tripId } = req.params; // Get trip ID from request parameters
        const userId = req.user.id; // Get authenticated user ID
        console.log(userId);
        console.log(tripId);
        // Validate if tripId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(tripId)) {
            return res.status(400).json({ success: false, message: "Invalid trip ID format." });
        }

        // Find the trip
        const trip = await tripModel.findById(tripId)

        if(!trip){
            return res.json({ success: false, message: "Trip not Found."})
        }

        // Check if the user is the organiser of he trip
        if (trip.organiser.toString() !== userId) {
            return res.json({ success: false, message: "Unauthorized. Only the organizer can delete this trip."})
        }

        // Delete the trip
        await tripModel.findByIdAndDelete(tripId)

        res.json({ success:true, message: "Trip deleted successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const editTrip = async (req,res) => {
    try {
        const {tripId} = req.params; // Extract tripId from the URL
        const userId = req.user.id; // Get the authinticated user's ID

        // Find the trip and check if the user is the organiser
        const trip = await tripModel.findById(tripId);

        if(!trip){
            return res.json({ success: false, message: "trip not found"});
        }

        if(trip.organiser.toString() !== userId){
            return res.json({ success: false, message: "You are not authirized to edit this trip."})
        }

        // Update the trip details
        const updatedTrip = await tripModel.findByIdAndUpdate(tripId, req.body, { new: true, runValidators: true }); 
        res.json({ success: true, message: "Trip updated successfully.", updatedTrip})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}





export {createTrip, getTrips, getTrip, removeTrip, editTrip};

