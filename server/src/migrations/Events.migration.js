import { Sequelize } from "sequelize";
import db from "../data/Database.js";
import { Jobs } from "./Jobs.migration.js";
import Users from "./Auth.migration.js";

export const Events = db.define("events", {
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
  job_id: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: Jobs,
      key: "id",
    },
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
  event_desc: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  event_date: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      isDate: { msg: "nextEventDate must be a date" },
    },
  },
});

(async () => {
  await db.sync();
})();
