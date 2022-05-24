import express from 'express'
import {
    Register,
    Login,
    Logout,
    refreshToken,
} from '../controllers/Auth.controller.js'
import jobsRouter from './Jobs.route.js'
import eventsRouter from './Events.route.js'
import {
    createEvent,
    updateEvent,
    deleteEvent,
    readEvent,
    readAllEvents,
} from '../models/Events.model.js'
import { verifyToken } from '../middleware/VerifyToken.js'
import { getAllJobs } from '../controllers/Jobs.controller.js'

const router = express.Router()

// Authentication API
router.post('/signup', Register)
router.post('/login', Login)
router.delete('/logout', verifyToken, Logout)
router.get('/token', refreshToken)

// // Jobs API
router.use("/jobs", jobsRouter);

// Events API
router.use('/events', eventsRouter)

export default router
