import express from 'express'

const router = express.Router() // "/pets"

router.route('/').get()

export default router
