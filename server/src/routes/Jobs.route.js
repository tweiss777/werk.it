import express from 'express'
import { verifyToken } from '../middleware/VerifyToken.js'

const router = express.Router() // "/pets"

router.route('/').get(verifyToken)

export default router
