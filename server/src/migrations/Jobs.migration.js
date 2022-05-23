import { Sequelize } from "sequelize";
import db from "../data/Database.js";
import Users from "./Auth.migration.js";

const phaseValidator = [
  "WISHLIST",
  "NOT_STARTED",
  "APPLICATION",
  "HR_INTVW",
  "TECH_INTVW",
  "MANAGER_INTVW",
  "HOME_ASGMT",
  "OFFER",
];

const statusValidator = ["COMPLETED", "INACTIVE", "IN_PROGRESS", "REJECTED"];

export const Jobs = db.define("jobs", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
    validate: {
      isUUID: {
        args: 4,
        msg: "Not a valid job ID",
      },
    },
  },
  added_by: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: Users,
      key: "id",
    },
    validate: {
      isUUID: {
        args: 4,
        msg: "Not a valid job ID",
      },
    },
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Software Developer",
  },
  company_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: { msg: "companyName must be alphanumeric" },
    },
  },
  company_url: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: { isUrl: { message: "URL is not valid" } },
  },
  company_logo: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: { isUrl: { message: "URL is not valid" } },
  },
  job_desc: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  job_source: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: { isUrl: { message: "URL is not valid" } },
  },
  phase: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "NOT_STARTED",
    validate: {
      isIn: {
        args: [phaseValidator],
        msg: `Job phase must be ${phaseValidator}`,
      },
    },
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [statusValidator],
        msg: `Job Status must be ${statusValidator}`,
      },
    },
  },
  handed_cv: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  handed_asgmt: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  handed_cover: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  notes: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});
(async () => {
  await db.sync();
})();
