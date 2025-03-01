import tripModel from "../models/tripModel.js";
import mongoose from "mongoose";


const createCost = async (req, res) => {
    try {
        // Get the inputs from the user.
        const { travel, accommodation, food, activities } = req.body;

        // Validate the required fields.
        if(!travel || !accommodation){
            return res.json( { success: false, message: "Please fill all the fields."});
        }

        // Get the trip Id.
        const { tripId } = req.params;

        // Get the specific trip.
        const trip = await tripModel.findById(tripId);

        // checking if the trip exists.
        if(!trip){
            return res.json( { success:false, message:"The trip does not exist."} );
        }

        // Creating and Updating the costs.
        trip.costs = {
            ...trip.costs, // Preserve existing costs
            travel: travel || trip.costs?.travel,
            accommodation: accommodation || trip.costs?.accommodation,
            food: food || trip.costs?.food,
            activities: activities || trip.costs?.activities,
        };

        await trip.save();
        

        res.json({ success:true, message:"Costs updated successfully.", costId: trip.costs._id})

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
    

}

const getCost = async (req, res) => {
    try {
        // Get the user details.
        const userId = req.user.id;

        // Get the trip id.
        const { tripId } = req.params;

        // Validate if tripId is a valid ObjectId.
        if (!mongoose.Types.ObjectId.isValid(tripId)) {
            return res.status(400).json({ success: false, message: "Invalid trip ID format." });
        }

        // Get the trip.
        const trip = await tripModel.findOne({
            _id: tripId,
            $or: [{ organiser: userId }, { participants: userId}],
        });
            

        // Check if the trip exixts.
        if(!trip){
            return res.json( { success:false, message:"The trip does not exist." })
        }

        // Get the cost.
        const costs = trip.costs;

        // Return the cost.
        res.json({ success:true, costs});

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const getFoodCost = async (req, res) => {
    try {
        // Get the user details.
        const userId = req.user.id;

        // Get the trip id.
        const { tripId } = req.params;

        // Validate if tripId is a valid ObjectId.
        if (!mongoose.Types.ObjectId.isValid(tripId)) {
            return res.status(400).json({ success: false, message: "Invalid trip ID format." });
        }

        // Get the trip.
        const trip = await tripModel.findOne({
            _id: tripId,
            $or: [{ organiser: userId }, { participants: userId}],
        });
            

        // Check if the trip exixts.
        if(!trip){
            return res.json( { success:false, message:"The trip does not exist." })
        }

        // Get the cost 
        const costs = trip.costs?.food || null;

        // Return the cost.
        res.json({ success:true, costs}); 
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }


}

const getAccommodationCost = async (req, res) => {
    try {
        // Get the user details.
        const userId = req.user.id;

        // Get the trip id.
        const { tripId } = req.params;

        // Validate if tripId is a valid ObjectId.
        if (!mongoose.Types.ObjectId.isValid(tripId)) {
            return res.status(400).json({ success: false, message: "Invalid trip ID format." });
        }

        // Get the trip.
        const trip = await tripModel.findOne({
            _id: tripId,
            $or: [{ organiser: userId }, { participants: userId}],
        });
            

        // Check if the trip exixts.
        if(!trip){
            return res.json( { success:false, message:"The trip does not exist." })
        }

        // Get the cost 
        const costs = trip.costs?.accommodation || null;

        // Return the cost.
        res.json({ success:true, costs}); 
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const getTravelCost = async (req, res) => {
    try {
        // Get the user details.
        const userId = req.user.id;

        // Get the trip id.
        const { tripId } = req.params;

        // Validate if tripId is a valid ObjectId.
        if (!mongoose.Types.ObjectId.isValid(tripId)) {
            return res.status(400).json({ success: false, message: "Invalid trip ID format." });
        }

        // Get the trip.
        const trip = await tripModel.findOne({
            _id: tripId,
            $or: [{ organiser: userId }, { participants: userId}],
        });
            

        // Check if the trip exixts.
        if(!trip){
            return res.json( { success:false, message:"The trip does not exist." })
        }

        // Get the cost 
        const travelCosts = trip.costs?.travel || null;

        // Return the cost.
        res.json({ success:true, travelCosts }); 

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const getActivityCost = async (req, res) => {
    try {
        // Get the user details.
        const userId = req.user.id;

        // Get the trip id.
        const { tripId } = req.params;

        // Validate if tripId is a valid ObjectId.
        if (!mongoose.Types.ObjectId.isValid(tripId)) {
            return res.status(400).json({ success: false, message: "Invalid trip ID format." });
        }

        // Get the trip.
        const trip = await tripModel.findOne({
            _id: tripId,
            $or: [{ organiser: userId }, { participants: userId}],
        });
            

        // Check if the trip exixts.
        if(!trip){
            return res.json( { success:false, message:"The trip does not exist." })
        }

        // Get the cost 
        const activityCosts = trip.costs?.activities || null;

        // Return the cost.
        res.json({ success:true, activityCosts}); 

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}

export {createCost, getCost, getFoodCost, getAccommodationCost, getTravelCost, getActivityCost}