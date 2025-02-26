import express from 'express'
import {createActivity, getActivity, getActivities } from '../controllers/activityController.js'
import protect from '../middleware/authMiddleware.js'

const activityRouter = express.Router( { mergeParams: true })

activityRouter.post('/createAct', protect, createActivity)
activityRouter.get('/get/:activityId', protect, getActivity)
activityRouter.get('/getAll', protect, getActivities)

export default activityRouter;