import express from 'express';
import { createTrip, getTrips, getTrip, removeTrip, editTrip } from '../controllers/tripController.js';
import protect from '../middleware/authMiddleware.js';

const tripRouter = express.Router()

tripRouter.post('/createTrip',protect, createTrip)
tripRouter.get('/getTrips',protect, getTrips)
tripRouter.get('/getTrip/:tripId',protect, getTrip)
tripRouter.delete('/removeTrip/:tripId',protect, removeTrip)
tripRouter.put('/editTrip/:tripId',protect, editTrip)


export default tripRouter;
