import {
    readAllJobs,
    readJob,
    createJob,
    updateJob,
    deleteJob,
} from '../models/Jobs.model.js'

// Get Jobs
export const getAllJobs = async (req, res, next) => {
    const { user, query } = req
    const where = { ...query, added_by: user.id }
    try {
        const Jobs = await readAllJobs(where)
        res.json(Jobs)
    } catch (err) {
        next(err)
    }
}

export const getJob = async (req, res, next) => {
    const { id } = req.params
    const where = { added_by: id }
    try {
        const Job = await readJob(where)
        res.json(Job)
    } catch (err) {
        next(err)
    }
}

// Post Job
export const addJob = async (req, res, next) => {
    const { user, body } = req
    try {
        const jobAdded = await createJob({...body, added_by: user.id})
        res.json(jobAdded)
    } catch (err) {
        next(err)
    }
}

// Edit Job
export const editJob = async (req, res, next) => {
    const { id } = req.params
    const { user } = req
    const where = { id, added_by: user.id }
    const editedJob = req.body
    try {
        const JobUpdated = await updateJob(editedJob, where)
        res.json(JobUpdated)
    } catch (err) {
        next(err)
    }
}

// Remove Job
export const removeJob = async (req, res, next) => {
    const { id } = req.params
    const { user } = req
    const where = { id, added_by: user.id }
    try {
        const JobUpdated = await deleteJob(where)
        res.json(JobUpdated)
    } catch (err) {
        next(err)
    }
}

// Wishlist Jobs
const wishlistPhase = 'WISHLIST'

export const getWishlistJobs = async (req, res, next) => {
    const { user, query } = req
    const where = {...query, phase: wishlistPhase, saved_by: user.id}
    try {
        const savedJobs = await readAllJobs(where)
        res.json(savedJobs)
    } catch (err) {
        next(err)
    }
}

export const getWishlistJob = async (req, res, next) => {
    const { id } = req.params
    const { user } = req
    const where = {id, phase: wishlistPhase, saved_by: user.id}
    try {
        const Job = await readJob(where)
        res.json(Job)
    } catch (err) {
        next(err)
    }
}

export const addWishlistJob = async (req, res, next) => {
    const { id } = req.params
    const { user, body } = req
    const where = {...body, phase: wishlistPhase, saved_by: user.id}
    try {
        const jobAdded = await createJob(where)
        res.json(jobAdded)
    } catch (err) {
        next(err)
    }
}
