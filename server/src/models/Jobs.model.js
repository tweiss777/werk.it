import { Sequelize } from "sequelize";
import { Jobs } from "../migrations/Jobs.migration.js";

import { error, exposeAttributes } from "../utils/utils.js";

export const createJob = async (reqBody) => {
  const {
    position,
    companyName,
    companyLogo,
    companyUrl,
    jobDesc,
    jobSource,
    jobPhase,
    jobStatus,
    handedCv,
    handedAsgmt,
    handedCover,
    notes,
    added_by,
  } = reqBody;

  const newJob = {
    added_by: added_by,
    position: position,
    company_name: companyName,
    company_url: companyUrl,
    company_logo: companyLogo,
    job_desc: jobDesc,
    job_source: jobSource,
    phase: jobPhase,
    status: jobStatus,
    handed_cv: handedCv,
    handed_asgmt: handedAsgmt,
    handed_cover: handedCover,
    notes: notes,
  };
  return await Jobs.create(newJob);
};

export const updateJob = async (payload, where) => {
  const jobToUpdate = await Jobs.findOne({where});
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
