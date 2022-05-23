import {
    createJob,
    readJob,
    readAllJobs,
    readSavedJobs,
    updateJob,
    addSavedJob,
    deleteSavedJob,
} from '../models/Jobs.model.js'

// Get Jobs
export const getAllJobs = async (req, res, next) => {
    const { query } = req
    try {
        const Jobs = await readAllJobs(query)
        res.json(Jobs)
    } catch (err) {
        next(err)
    }
}

export const getJob = async (req, res, next) => {
    const { id } = req.params
    const where = { id }
    try {
        const Job = await readJob({ where })
        res.json(Job)
    } catch (err) {
        next(err)
    }
}

// Post Job
export const addJob = async (req, res, next) => {
    const newJob = req.body
    try {
        const JobAdded = await createJob(newJob)
        res.json(JobAdded)
    } catch (err) {
        next(err)
    }
}

// Edit Job
export const editJob = async (req, res, next) => {
    const editedJob = req.body
    try {
        const JobUpdated = await updateJob(editedJob)
        res.json(JobUpdated)
    } catch (err) {
        next(err)
    }
}

// Remove Job
export const removeJob = async (req, res, next) => {
    const editedJob = req.body
    try {
        const JobUpdated = await deleteJob(editedJob)
        res.json(JobUpdated)
    } catch (err) {
        next(err)
    }
}

// Saved Jobs
export const getSavedJobs = async (req, res, next) => {
    const { user, query } = req
    try {
        const savedJobs = await readSavedJobs(user.id, query)

        res.json(savedJobs)
    } catch (err) {
        next(err)
    }
}

export const saveJob = async (req, res, next) => {
    const { id } = req.params
    const { user } = req
    try {
        const Jobsaved = await addSavedJob({ userId: user.id, JobId: id })
        const savedJobs = await readSavedJobs(user.id)
        res.json(savedJobs)
    } catch (err) {
        next(err)
    }
}

export const unSaveJob = async (req, res, next) => {
    const { id } = req.params
    const { user } = req

    try {
        await deleteSavedJob({ userId: user.id, JobId: id })
        const savedJobs = await readSavedJobs(user.id)
        res.json(savedJobs)
    } catch (err) {
        next(err)
    }
}
