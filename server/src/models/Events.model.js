import { Events } from "../migrations/Events.migration.js";

export const createEvent = async (reqBody) => {
  return await Events.create({ reqBody });
};

export const updateEvent = async (payload, where) => {
  return await Events.update({ payload }, { where });
};

export const deleteEvent = async (where) => {
  return await Events.destroy({
    where,
  });
};

export const readEvent = async (where) => {
  const Event = await Events.findOne({
    where,
  });
  return Event;
};

export const readAllEvents = async (where) => {
  return await Events.findAll(where);
};
