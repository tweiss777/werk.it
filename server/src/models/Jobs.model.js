import { Sequelize } from "sequelize";
import { Jobs } from "../migrations/Jobs.migration.js";

import { error, exposeAttributes, translateFields } from "../utils/utils.js";

export const createJob = async (reqBody) => {
  const translatedBody = translateFields(reqBody);
  return await Jobs.create( translatedBody );
};

export const updateJob = async (payload, where) => {
  const jobToUpdate = await Jobs.findOne({ where });
  await jobToUpdate.update(payload);
  await jobToUpdate.save();
  return jobToUpdate;
};

export const deleteJob = async (where) => {
  return await Jobs.destroy({
    where,
  });
};

export const readJob = async (where) => {
  return await Jobs.findOne({ where });
};

export const readAllJobs = async (where) => {
  return await Jobs.findAll({ where });
};
