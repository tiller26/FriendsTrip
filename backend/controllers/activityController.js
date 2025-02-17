import tripModel from "../models/tripModel.js";

const createActivity = async (req, res) => {
    try {
        const {title,  description, startTime, endTime, date, cost} = req.body;

        if( !title || !startTime || !endTime || !date || !cost){
            return res.json({ success:false, message: "Please fill all the fields !!!"})
        }

        // Extract the trip Id 
        const { tripId } = req.params; 

        // Convert the string date and times to Date object
        const start = new Date(date+"T"+startTime+"Z");
        const end = new Date(date+"T"+endTime+"Z");
        const actdate = new Date(date);

        // Check if the trip Overlaps
        const trip = await tripModel.findById(tripId);

        if(!trip){
            return res.json( { success: false, message: "The trip does not exist"});
        }

        // Check for overlapping
        const overlapping = trip.activities.some(activity => 
        (start <= activity.endTime && end >= activity.startTime) &&
        actdate.toISOString().split("T")[0] === activity.date.toISOString().spli("T")[0]
        )

        if(overlapping){
            return res.json( { success: false, message: "There is activity during the time."})
        }

        // Create the activity
        const activity = { title,  description, startTime: start, endTime : end, date : actdate, cost};

        trip.activities.push(activity);

        // Save the updated trip.
        await trip.save();

        res.json({ succcess: true, message: "Activity added successfully.", trip})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const getActivity = async (req, res) => {

}

const getActivities = async (req, res) => {
    
}

export {createActivity, getActivity, getActivities, }