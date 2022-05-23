import { Sequelize } from "sequelize";
import db from "../data/Database.js";
import Users from "./Auth.migration.js";

// import { customJoin } from "../utils/utils.js";
// const typeValidator = ["CAT", "DOG"];
const statusValidator = [
  "Application",
  "HR Interview",
  "Tech Interview",
  "Manager Interview",
  "Home Assignment",
  "Got an Offer!",
];

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
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isAlphanumeric: { msg: "Source name must be alphanumeric" } },
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Software Developer",
    validate: {
      isAlpha: { msg: "job's position must be letters only" },
    },
  },
  company_id: {
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
  current_task: {
    type: Sequelize.UUID,
    defaultValue: UUIDV4,
    references: {
      model: JobTasks,
      key: "id",
    },
    validate: {
      isUUID: {
        args: 4,
        msg: "Not a valid job ID",
      },
    },
  },
  job_description: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isAlphanumeric: {
        message: "job_description must be numbers or characters only",
      },
    },
  },
  source_id: {
    type: UUID,
    validate: {
      isUUID: {
        args: 4,
        msg: "Not a valid job ID",
      },
    },
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [statusValidator],
        message: `Jobs' status must be 
            ${typeValidator}`,
      },
    },
  },
});

export const Company = db.define("company", {
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
  url: {
    type: Sequelize.STRING,
    validate: {
      isUrl: { message: "Not a valid URL" },
    },
  },
  logo: {
    type: Sequelize.STRING,
    validate: {
      isUrl: { message: "Not a valid URL" },
    },
  },
});

export const Source = db.define("source", {
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
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isAlphanumeric: { msg: "Source name must be alphanumeric" } },
  },
  url: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
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
    validate: { isEmail: { message: "Not a valid email" } },
  },
  deadline: {
    type: Sequelize.DATE,
    validate: {
      isDate: { message: "deadline must be a date" },
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

export default Jobs;
