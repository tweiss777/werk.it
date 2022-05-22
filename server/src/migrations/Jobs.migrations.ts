import { UUIDV4, UUID } from "sequelize";
import { Sequelize, DataTypes } from "sequelize";
import db from "../data/Database";
import Users from "./Auth.migration";

// import { customJoin } from "../utils/utils.js";
const statusValidator = [
  "Application",
  "HR Interview",
  "Tech Interview",
  "Manager Interview",
  "Home Assignment",
  "Got an Offer!",
];
// const typeValidator = ["CAT", "DOG"];

const Jobs = db.define(
  "Jobs",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
      type: DataTypes.UUID,
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
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isAlpha: { msg: "job's name must be letters only" } },
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Software Developer",
      validate: { isAlpha: { msg: "job's position must be letters only" } },
    },
    company_id: {
      type: DataTypes.UUID,
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
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      // references: {
      //   model: JobTasks,
      //   key: "id",
      // },
      validate: {
        isUUID: {
          args: 4,
          msg: "Not a valid job ID",
        },
      },
    },
    job_description: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isIn: {
      //     args: [statusValidator],
      //     msg: `job's status must be ${customJoin(
      //       statusValidator,
      //       ", ",
      //       " or "
      //     )}`,
      //   },
      // },
    },
  },
  {
    freezeTableName: true,
  }
);

export const SavedJobs = db.define(
  "saved_Jobs",
  {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      validate: {
        isUUID: {
          args: 4,
          msg: "Not a valid job ID",
        },
      },
    },
    jobId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      validate: {
        isUUID: {
          args: 4,
          msg: "Not a valid job ID",
        },
      },
    },
  },
  {
    freezeTableName: true,
  }
);
Users.hasMany(SavedJobs, {
  foreignKey: "userId",
});
SavedJobs.belongsTo(Users);
Jobs.hasMany(SavedJobs, {
  foreignKey: "jobId",
});
SavedJobs.belongsTo(Jobs);
export const OwnedJobs = db.define(
  "saved_Jobs",
  {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      validate: {
        isUUID: {
          args: 4,
          msg: "Not a valid job ID",
        },
      },
    },
    jobId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      validate: {
        isUUID: {
          args: 4,
          msg: "Not a valid job ID",
        },
      },
    },
  },
  {
    freezeTableName: true,
  }
);
Users.hasMany(SavedJobs, {
  foreignKey: "userId",
});
SavedJobs.belongsTo(Users);
Jobs.hasMany(SavedJobs, {
  foreignKey: "jobId",
});
SavedJobs.belongsTo(Jobs);
(async () => {
  await db.sync();
})();
export default Jobs;
