import express from "express";
import {
  addJob,
  editJob,
  getJob,
  getAllJobs,
  getSavedJobs,
  removeJob,
  saveJob,
  unSaveJob,
} from "../controllers/Jobs.controller.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router(); // "/pets"

// Get All jobs
router
  .route("/")
  .get(verifyToken, getAllJobs)
  // Add new job
  .post(verifyToken, addJob);

// Get Job
router
  .route("/:id")
  .get(verifyToken, getJob)
  // Update Job
  .put(verifyToken, editJob)
  // Delete Job
  .delete(verifyToken, removeJob);

// Get All Saved Jobs
router.route("/save").get(verifyToken, getSavedJobs);
// Save Job

router
  .route("/save/:id")
  .post(verifyToken, saveJob)
  // Unsave Job
  .delete(verifyToken, unSaveJob);

export default router;
