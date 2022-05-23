import { Sequelize } from "sequelize";
import db from "../data/Database.js";

// Bcrypt hash
const hashValidator = /^\$2[ayb]\$.{56}$/;

// JWT HS-256
const tokenValidator =
  /^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)/;

const Users = db.define(
  "users",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
      validate: { isUUID: { args: 4, message: "Not a valid ID" } },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: { message: "Not a valid email" } },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: {
          args: hashValidator,
          message: "Not a valid hash password",
        },
      },
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    is_admin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    refresh_token: {
      type: Sequelize.TEXT,
      allowNull: true,
      validation: {
        is: { args: tokenValidator, message: "Not a valid token" },
      },
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

export default Users;
