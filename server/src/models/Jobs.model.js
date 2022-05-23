import { Jobs } from "../migrations/Jobs.migration.js";
import { error, exposeAttributes } from "../utils/utils.js";

const publicAttributesJobs = [
  "id",
  "email",
  "firstName",
  "lastName",
  "is_admin",
];

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

  await Jobs.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });
};

export const updateJob = async (reqBody) => {
  const { name, position, companyName, jobDescription, status } = req.body;
};

export const deleteJob = async (reqBody) => {
  const { name, position, companyName, jobDescription, status } = req.body;
};

export const readJob = async (where, isPublic = false) => {
  const jobs = await Jobs.findOne({
    where,
    ...(isPublic && { attributes: publicAttributes }),
  });
  return jobs;
};

export const readAllJobs = async (isPublic = false) => {
  const jobs = await Jobs.findAll(
    ...(isPublic && { attributes: publicAttributes })
  );
  return jobs;
};

export const addSavedJob = async (isPublic = false) => {
  const jobs = await Jobs.findAll(
    ...(isPublic && { attributes: publicAttributes })
  );
  return jobs;
};

export const readSavedJobs = async (isPublic = false) => {
  const jobs = await Jobs.findAll(
    ...(isPublic && { attributes: publicAttributes })
  );
  return jobs;
};

export const deleteSavedJob = async (isPublic = false) => {
  const jobs = await Jobs.findAll(
    ...(isPublic && { attributes: publicAttributes })
  );
  return jobs;
};
