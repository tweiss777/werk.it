import express from 'express'
import {
    addJob,
    editJob,
    getJob,
    getAllJobs,
    removeJob,
    getWishlistJobs,
    addWishlistJob,
    getWishlistJob,
} from '../controllers/Jobs.controller.js'
import { verifyToken } from '../middleware/VerifyToken.js'

const router = express.Router() // "/pets"

// Get All jobs
router
    .route('/')
    .get(verifyToken, getAllJobs)
    // Add new job
    .post(verifyToken, addJob)

// Get Job
router
    .route('/:id')
    .get(verifyToken, getJob)
    // Update Job
    .put(verifyToken, editJob)
    // Delete Job
    .delete(verifyToken, removeJob)

// Get All Wishlist Jobs
router
    .route('/wishlist')
    .get(verifyToken, getWishlistJobs)
    // Save Wishlist Job
    .post(verifyToken, addWishlistJob)
// Get Wishlist job by id
router.route('/wishlist/:id').get(verifyToken, getWishlistJob)

// 

export default router
