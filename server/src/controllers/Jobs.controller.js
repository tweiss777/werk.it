import {
  readAllJobs,
  readJob,
  createJob,
  updateJob,
  deleteJob,
  readWishlistJobs,
  createWishlistJob,
  deleteWishlistJob,
} from "../models/Jobs.model.js";

// Get Jobs
export const getAllJobs = async (req, res, next) => {
  const { query } = req;
  try {
    const Jobs = await readAllJobs(query);
    res.json(Jobs);
  } catch (err) {
    next(err);
  }
};

export const getJob = async (req, res, next) => {
  const { id } = req.params;
  const where = { added_by: id };
  try {
    const Job = await readJob({ where });
    res.json(Job);
  } catch (err) {
    next(err);
  }
};

// Post Job
export const addJob = async (req, res, next) => {
  const newJob = req.body;
  try {
    const JobAdded = await createJob(newJob);
    res.json(JobAdded);
  } catch (err) {
    next(err);
  }
};

// Edit Job
export const editJob = async (req, res, next) => {
  const editedJob = req.body;
  try {
    const JobUpdated = await updateJob(editedJob);
    res.json(JobUpdated);
  } catch (err) {
    next(err);
  }
};

// Remove Job
export const removeJob = async (req, res, next) => {
  const editedJob = req.body;
  try {
    const JobUpdated = await deleteJob(editedJob);
    res.json(JobUpdated);
  } catch (err) {
    next(err);
  }
};

// Saved Jobs
export const getWishlistJobs = async (req, res, next) => {
  const { user, query } = req;
  try {
    const savedJobs = await readWishlistJobs(user.id, query);

    res.json(savedJobs);
  } catch (err) {
    next(err);
  }
};

export const addWishlistJob = async (req, res, next) => {
  const { id } = req.params;
  const { user } = req;
  try {
    //phase = "WISHLIST"
    const newJob = await createJob({ userId: user.id, JobId: id });
    const savedJobs = await readWishlistJobs(user.id);
    res.json(savedJobs);
  } catch (err) {
    next(err);
  }
};
