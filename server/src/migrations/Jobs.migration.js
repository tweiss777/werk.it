import { Sequelize } from "sequelize";
import db from "../data/Database.js";
import Users from "./Auth.migration.js";

// import { customJoin } from "../utils/utils.js";
// const typeValidator = ["CAT", "DOG"];
const phaseValidator = [
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
    validate: {
      isAlpha: { msg: "jobs' position must be letters only" },
    },
  },
  company_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: { msg: "companyName must be alphanumeric" },
    },
  },
  company_url: {
    type: Sequelize.STRING,
    validate: {
      isUrl: { msg: "Not a valid URL" },
    },
  },
  company_logo: {
    type: Sequelize.STRING,
    validate: {
      isUrl: { msg: "Not valid URL" },
    },
  },
  job_desc: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isAlphanumeric: {
        msg: "job_description must be alphanumeric",
      },
    },
  },
  job_source: {
    type: Sequelize.UUID,
    isUrl: { msg: "Not valid URL" },
  },
  phase: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "APPLICATION",
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
  next_event_date: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      isDate: { msg: "nextEventDate must be a date" },
    },
  },
  next_event_desc: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: { msg: "nextEventDesc can only be alphanumeric values" },
    },
  },
  notes: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

(async () => {
  await db.sync();
})();
