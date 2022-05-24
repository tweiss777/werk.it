import {
  readAllJobs,
  readJob,
  createJob,
  updateJob,
  deleteJob,
} from "../models/Jobs.model.js";
import { deleteEvent } from "../models/Events.model.js";

// Get Jobs
export const getAllJobs = async (req, res, next) => {
  const { user, query } = req;
  const where = { ...query, added_by: user.id };
  try {
    const Jobs = await readAllJobs(where);
    res.json(Jobs);
  } catch (err) {
    next(err);
  }
};

export const getJob = async (req, res, next) => {
  const { user } = req;
  const { id } = req.params;
  const where = { id, added_by: user.id };
  try {
    const Job = await readJob(where);
    res.json(Job);
  } catch (err) {
    next(err);
  }
};

// Post Job
export const addJob = async (req, res, next) => {
  const { user, body } = req;
  try {
    const jobAdded = await createJob({ ...body, added_by: user.id });
    res.json(jobAdded);
  } catch (err) {
    next(err);
  }
};

// Edit Job
export const editJob = async (req, res, next) => {
  const { id } = req.params;
  const { user } = req;
  const where = { id, added_by: user.id };
  const editedJob = req.body;
  try {
    const JobUpdated = await updateJob(editedJob, where);
    res.json(JobUpdated);
  } catch (err) {
    next(err);
  }
};

// Remove Job
export const removeJob = async (req, res, next) => {
  const { id } = req.params;
  const { user } = req;
  const whereEvent = { job_id: id, added_by: user.id };
  const where = { id, added_by: user.id };
  try {
    const EventUpdated = await deleteEvent(whereEvent);
    const JobDeleted = await deleteJob(where);
    res.json(JobDeleted);
  } catch (err) {
    next(err);
  }
};

// Wishlist Jobs
const wishlistPhase = "WISHLIST";
export const getWishlistJobs = async (req, res, next) => {
  const { user, query } = req;
  const where = { phase: wishlistPhase, added_by: user.id };
  try {
    const savedJobs = await readAllJobs(where);
    res.json(savedJobs);
  } catch (err) {
    next(err);
  }
};

export const getWishlistJob = async (req, res, next) => {
  const { id } = req.params;
  const { user } = req;
  const where = { phase: wishlistPhase, added_by: user.id, id: id };
  try {
    const Job = await readJob(where);
    res.json(Job);
  } catch (err) {
    next(err);
  }
};

export const addWishlistJob = async (req, res, next) => {
  const { user, body } = req;
  body.jobPhase = wishlistPhase;
  const where = { ...body, added_by: user.id };
  try {
    const wishlistJobAdded = await createJob(where);
    res.json(wishlistJobAdded);
  } catch (err) {
    next(err);
  }
};
