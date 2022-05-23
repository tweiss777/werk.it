import { Jobs } from "../migrations/Jobs.migration.js";
import { error, exposeAttributes } from "../utils/utils.js";

export const createJob = async (reqBody) => {
  const {
    position,
    companyName,
    companyLogo,
    jobDescription,
    jobSource,
    jobPhase,
    jobStatus,
    handedCv,
    handedAsgmt,
    handedCover,
    nextEventDate,
    nextEventDesc,
    notes,
  } = req.body;

  const newJob = {
    position: position,
    company_name: companyName,
    company_url: companyUrl,
    company_logo: companyLogo,
    job_desc: jobDescription,
    job_source: jobSource,
    phase: jobPhase,
    status: jobStatus,
    handed_cv: handedCv,
    handed_asgmt: handedAsgmt,
    handed_cover: handedCover,
    next_event_date: nextEventDate,
    next_event_description: nextEventDesc,
    notes: notes,
  };

  return await Jobs.create({ newJob });
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
