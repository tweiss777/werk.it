import {
    readAllJobs,
    readJob,
    createJob,
    updateJob,
    deleteJob,
    readWishlistJobs,
    createWishlistJob,
    deleteWishlistJob,
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
    const {
        position,
        companyName,
        companyLogo,
        jobDescription,
        jobSource,
        jobPhase,
        jobStatus,
        handedCv,
        handedAsgmt,
        handedCover,
        nextEventDate,
        nextEventDesc,
        notes,
    } = req.body

    const newJob = {
        position: position,
        company_name: companyName,
        company_url: companyUrl,
        company_logo: companyLogo,
        job_desc: jobDescription,
        job_source: jobSource,
        phase: jobPhase,
        status: jobStatus,
        handed_cv: handedCv,
        handed_asgmt: handedAsgmt,
        handed_cover: handedCover,
        next_event_date: nextEventDate,
        next_event_description: nextEventDesc,
        notes: notes,
    }
    try {
        const JobAdded = await createJob(newJob)
        res.json(JobAdded)
    } catch (err) {
        next(err)
    }
}

// Edit Job
export const editJob = async (req, res, next) => {
    const { id } = req.params
    const where = { added_by: id }
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
    const where = { added_by: id }
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

export const addWishlistJob = async (req, res, next) => {
    const { id } = req.params
    const { user } = req
    try {
        const newJob = await createJob({ userId: user.id, JobId: id })
        const savedJobs = await readWishlistJobs(user.id)
        res.json(savedJobs)
    } catch (err) {
        next(err)
    }
}
