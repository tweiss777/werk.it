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
      isAlpha: { msg: "job's position must be letters only" },
    },
  },
  company_name: {
    type: Sequelize.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    validate: {
      isUUID: {
        args: 4,
        msg: "Not a valid job ID",
      },
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
      isUrl: { msg: "Not a valid URL" },
    },
  },
  job_desc: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isAlphanumeric: {
        msg: "job_description must be numbers or characters only",
      },
    },
  },
  job_source: {
    type: UUID,
    validate: {
      isUrl: { msg: "Not a valid URL" },
    },
  },
  phase: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "APPLICATION",
    validate: {
      isIn: {
        args: [phaseValidator],
        msg: `Job phase must be ${typeValidator}`,
      },
    },
  },
  status: {
    type: Sequelize.STRING,
    validate: {
      isIn: {
        args: [statusValidator],
        msg: `Job Status must be ${statusValidator}`,
      },
    },
  },
  handed_cv: {
    //bool
  },
  handed_asgmt: {
    //bool
  },
  handed_cover: {
    //bool
  },
  next_event_date: {
    //date
  },
  next_event_desc: {
    //string - describing next event
  },
});

export const JobTasks = db.define("job_tasks", {
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
    references: {
      model: Jobs,
      key: "id",
    },
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isAlphanumeric: { msg: "Source name must be alphanumeric" } },
  },
  contact_email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: { msg: "Not a valid email" } },
  },
  deadline: {
    type: Sequelize.DATE,
    validate: {
      isDate: { msg: "deadline must be a date" },
    },
  },
  isCompleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});
(async () => {
  await db.sync();
})();
