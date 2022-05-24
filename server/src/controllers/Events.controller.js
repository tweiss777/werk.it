import {
  createEvent,
  updateEvent,
  deleteEvent,
  readEvent,
  readAllEvents,
} from "../models/Events.model.js";

// Get Events
export const getAllEvents = async (req, res, next) => {
  const { user, query } = req;
  const where = { ...query, added_by: user.id };
  try {
    const Events = await readAllEvents(where);
    res.json(Events);
  } catch (err) {
    next(err);
  }
};

export const getAllJobEvents = async (req, res, next) => {
  const { id } = req.params;
  const where = { job_id: id };
  try {
    const Event = await readEvent(where);
    res.json(Event);
  } catch (err) {
    next(err);
  }
};

export const getEventById = async (req, res, next) => {
  const { id } = req.params;
  const where = { id: id };
  try {
    const Event = await readEvent(where);
    res.json(Event);
  } catch (err) {
    next(err);
  }
};

// Post Event
export const addEvent = async (req, res, next) => {
  const { user, body } = req;
  try {
    const eventAdded = await createEvent({ ...body, added_by: user.id });
    res.json(eventAdded);
  } catch (err) {
    next(err);
  }
};

// Edit Event
export const editEvent = async (req, res, next) => {
  const { id } = req.params;
  const { user } = req;
  const where = { id, added_by: user.id };
  const editedEvent = req.body;
  try {
    const EventUpdated = await updateEvent(editedEvent, where);
    res.json(EventUpdated);
  } catch (err) {
    next(err);
  }
};

// Remove Event
export const removeEvent = async (req, res, next) => {
  const { id } = req.params;
  const { user } = req;
  const where = { id, added_by: user.id };
  try {
    const EventUpdated = await deleteEvent(where);
    res.json(EventUpdated);
  } catch (err) {
    next(err);
  }
};

