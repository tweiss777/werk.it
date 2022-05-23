import { Jobs } from "../migrations/Jobs.migration.js";
import { error, exposeAttributes } from "../utils/utils.js";

export const createJob = async (newJob) => {
  return await Jobs.create(newJob);
};

export const updateJob = async (payload, where) => {
  return await Jobs.update({ payload }, { where });
};

export const deleteJob = async (where) => {
  return await Jobs.destroy({
    where,
  });
};

export const readJob = async (where) => {
  const job = await Jobs.findOne({
    where,
  });
  return job;
};

export const readAllJobs = async (where) => {
  return await Jobs.findAll(where);
};
