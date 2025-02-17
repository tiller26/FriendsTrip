import express from 'express'
import {createCost, getCost, getFoodCost, getAccommodationCost, getTravelCost, getActivityCost} from '../controllers/costController.js'
import protect from '../middleware/authMiddleware.js'

const costRouter = express.Router()

costRouter.post('/create/:tripId', protect, createCost)
costRouter.get('/get/:costId', protect, getCost)
costRouter.get('/getFood', protect, getFoodCost)
costRouter.get('/getAccommodation', protect, getAccommodationCost)
costRouter.get('/getTravel', protect, getTravelCost)
costRouter.get('/getActivity', protect, getActivityCost)

export default costRouter;

