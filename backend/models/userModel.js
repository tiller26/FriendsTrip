import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    contact: { type: String, required: true},
    notification: {
        type: [
        {
            sender: { type: String, required: true},
            message: { type: String, required: true },
            tripId: { type: mongoose.Schema.Types.ObjectId, ref: "Trip" },
            timestamp: { type: Date, default: Date.now },
            status: { type: String, enum: ["unread", "read"], default: "unread"},


        }], default: [],
        
    },
})

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;