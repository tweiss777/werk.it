import express from 'express'
import { Register, Login, Logout, getUsers, getUser, refreshToken } from '../controllers/Auth.controller.js'
import jobsRouter from './Jobs.route.js'
import { verifyToken } from '../middleware/VerifyToken.js'
import { verifyAdmin } from '../middleware/VerifyAdmin.js'

const router = express.Router()

// Authentication API
router.post('/signup', Register)
router.post('/login', Login)
router.delete('/logout', Logout)
router.get('/token', refreshToken)

// User information API (Admin only)
router.get('/users', verifyToken, verifyAdmin, getUsers)
router.get('/user/:id', verifyToken, verifyAdmin, getUser)

// Jobs API
router.use('/jobs', jobsRouter)

export default router
