import express from 'express'
import {createActivity, getActivity, getActivities } from '../controllers/activityController.js'
import protect from '../middleware/authMiddleware.js'

const activityRouter = express.Router()

activityRouter.post('/create/:tripId', protect, createActivity)
activityRouter.get('/get/:activityId', protect, getActivity)
activityRouter.get('/getAll', protect, getActivities)

export default activityRouter;