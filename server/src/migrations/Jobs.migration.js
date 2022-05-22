import { UUIDV4, UUID } from "sequelize";
import { Sequelize, Sequelize } from "sequelize";
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

export const Jobs = db.define(
  "Jobs",
  {
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
      validate: { isAlpha: { msg: "job's name must be letters only" } },
    },
    position: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Software Developer",
      validate: { isAlpha: { msg: "job's position must be letters only" } },
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
      // validate: {},
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
    },
  },
  {
    freezeTableName: true,
  }
);

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
  },
  logo: {
    type: Sequelize.STRING,
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
    validate: { isAlpha: { msg: "Source name must be letters only" } },
  },
  url: {
    type: Sequelize.STRING,
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
  },
  //   task_id -> Points to current_task in Jobs
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isAlpha: { msg: "job's name must be letters only" } },
  },
  contact_email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: { message: "Not a valid email" } },
  },
  deadline: {
    type: Sequelize.DATE,
  },
  isCompleted: {
    type: Sequelize.BOOLEAN,
  },
});

(async () => {
  await db.sync();
})();
export default Jobs;
