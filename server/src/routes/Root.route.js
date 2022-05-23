import express from "express";
import {
  Register,
  Login,
  Logout,
  refreshToken,
} from "../controllers/Auth.controller.js";
import jobsRouter from "./Jobs.route.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

// Authentication API
router.post("/signup", Register);
router.post("/login", Login);
router.delete("/logout", Logout);
router.get("/token", refreshToken);

// Jobs API
router.use("/jobs", jobsRouter);

export default router;
