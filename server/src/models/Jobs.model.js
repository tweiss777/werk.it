import {
  Jobs,
  Company,
  Source,
  JobTasks,
} from "../migrations/Jobs.migration.js";
import { error, exposeAttributes } from "../utils/utils.js";

const publicAttributesJobs = [
  "id",
  "email",
  "firstName",
  "lastName",
  "is_admin",
];

export const createJob = async (reqBody) => {
  const { name, position, companyName, jobDescription, status, soureUrl, sourceName } = req.body;

  /*
  added_by  -> will be the userId of the user. Where do we get that?
  name: name -> string
  position: position -> string
  current_task: -> isUUID -> but needs to reference a new task. Also need to create a new task when we create a job?
  job_descripiton: jobDescription 
  source_id: try to find the source by name in the DB, and set the ID
*/

  //find the user by the id - what will be passed in req.body?
  //after getting the token, get the ID of the user and add to created_by
  //name
  //position
  //find company with name in db, if not exist then create it.
  //assign company_id = the companies id
  //current_task
  //job_description add
  //setStatus
};

export const editJob = async (reqBody) => {
  const { name, position, companyName, jobDescription, status } = req.body;
};

export const removeJob = async (reqBody) => {
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

export const readAllSavedJobs = async (isPublic = false) => {
  const jobs = await Jobs.findAll(
    ...(isPublic && { attributes: publicAttributes })
  );
  return jobs;
};

export const removeSavedJob = async (isPublic = false) => {
  const jobs = await Jobs.findAll(
    ...(isPublic && { attributes: publicAttributes })
  );
  return jobs;
};

export const readCompany = async (where, isPublic = false) => {
  const company = Company.findOne({
    where,
    ...(isPublic && { attributes: publicAttributes }),
  });
};
