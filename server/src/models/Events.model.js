import { Events } from "../migrations/Events.migration.js";

export const createEvent = async (reqBody) => {
  return await Events.create(reqBody);
};

export const updateEvent = async (payload, where) => {
  const eventToUpdate = await Events.findOne(where);
  await eventToUpdate.update(payload);
  await eventToUpdate.save();
  return eventToUpdate;
};

export const deleteEvent = async (where) => {
  console.log("WHERE in deleteEvent", where);
  return await Events.destroy({
    where,
  });
};

export const readEvent = async (where) => {
  const Event = await Events.findAll({
    where,
  });
  return Event;
};

export const readAllEvents = async (where) => {
  return await Events.findAll(where);
};
