import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const protect = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.split(" ")[1]; // Get token from header
        if (!token) {
            return res.status(401).json({ success: false, message: "Not authorized. No token provided." });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = await userModel.findById(decoded.id).select("-password"); // Get user without password

        if (!req.user) {
            return res.status(401).json({ success: false, message: "User not found." });
        }

        next(); // Proceed to the next middleware/controller
    } catch (error) {
        res.status(401).json({ success: false, message: "Invalid token." });
    }
};

export default protect;


