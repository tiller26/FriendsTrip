import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRouter.js'
import tripRouter from './routes/tripRouter.js'
import activityRouter from './routes/activityRouter.js'
import costRouter from './routes/costRouter.js'
import { createTrip } from './controllers/tripController.js'

// app config
const app = express()
const port= process.env.PORT || 4000
connectDB()
connectCloudinary()


// middlewares 
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/trip', tripRouter)
app.use('/api/trip/:tripId/activity', activityRouter)
app.use('/api/trip/:tripId/cost', costRouter)


app.get('/', (req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log('Server started on PORT:' + port))