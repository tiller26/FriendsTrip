import mongoose from "mongoose"
import userModel from "./userModel.js";

const tripSchema = new mongoose.Schema(
  {
    organiser: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    lArrivalTime: { type: String },
    lDepartureTime: { type: String },
    dArrivalTime: { type: String },
    dDepartureTime: { type: String },

    accommodation: {
      hotelId: { type: String }, // Booking.com API hotel ID
      name: { type: String },
      address: { type: String },
      image: { type: String },
      pricePerNight: { type: Number },
      amenities: [{ type: String }],
    },

    activities: {
        type: [
          {
            title: { type: String, required: true },
            description: String,
            startTime: { type: Date, required: true },
            endTime: { type: Date, required: true},
            date: { type: Date, required: true},
            cost: { type: String, required: true}
          },
        ],
        default: [], // This ensures activities defaults to an empty array
      },

      notifications: {
        type: [
          {
            sender: { type: String, required: true},
            message: { type: String, required: true },
            timestamp: { type: Date, default: Date.now },
          },
        ],
        default: [], // This ensures notifications defaults to an empty array
      },

      costs: {
        travel: { type: String},
        accomodation: { type: String},
        food: { type: String},
        activities: { type: String}
      }



}, { minimize: false })

const tripModel = mongoose.models.trip || mongoose.model("trip", tripSchema);

export default tripModel;

