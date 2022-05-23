import { Sequelize } from "sequelize";
import db from "../data/Database.js";
import Jobs from "./Jobs.migration.js";

export const Events = db.define({
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
  event_desc: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: { msg: "nextEventDesc can only be alphanumeric values" },
    },
  },
  event_date: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      isDate: { msg: "nextEventDate must be a date" },
    },
  },
});
