import { Jobs, Company } from "../migrations/Jobs.migration.js";
import { error, exposeAttributes } from "../utils/utils.js";

const publicAttributesJobs = [
  "id",
  "email",
  "firstName",
  "lastName",
  "is_admin",
];

export const readAllJobs = async (isPublic = false) => {
  const jobs = await Jobs.findAll(
    ...(isPublic && { attributes: publicAttributes })
  );
  return jobs;
};

export const readJob = async (where, isPublic = false) => {
  const jobs = await Jobs.findOne({
    where,
    ...(isPublic && { attributes: publicAttributes }),
  });
  return jobs;
};

export const readCompany = async (where, isPublic = false) => {
  const company = Company.findOne({
    where,
    ...(isPublic && { attributes: publicAttributes }),
  });
};

export const createJob = async (reqBody) => {
  const { name, position, companyName, jobDescription, status } = req.body;

  //find the user by the id - what will be passed in req.body?
  //after getting the token, get the ID of the user and add to created_by
  //name
  //position
  //find company with name in db, if not exist then create it.
  //assign company_id = the companies id
  //current_task
  //job_description add
  //source_id ?
  //setStatus
};
