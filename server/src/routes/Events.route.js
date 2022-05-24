import { verify } from "crypto";
import express from "express";
import {
  getAllEvents,
  getAllJobEvents,
  getEventById,
  addEvent,
  editEvent,
  removeEvent,
} from "../controllers/Events.controller.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

// Get All events
router
  .route("/")
  .get(verifyToken, getAllEvents)
  // Add new event
  .post(verifyToken, addEvent);

// Get All Events To Job
router.route("/job/:id").get(verifyToken, getAllJobEvents);

// Event By Id
router
  .route("/:id")
  .get(verifyToken, getEventById)
  // Update Event
  .put(verifyToken, editEvent)
  // Delete Event
  .delete(verifyToken, removeEvent);

//

export default router;
