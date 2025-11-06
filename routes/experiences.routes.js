import express from "express";
import {
  addExperiences,
  getExperienceById,
  getExperiences,
} from "../controllers/experiences.controllers.js";

const router = express.Router();

router.get("/", getExperiences);
router.get("/:id", getExperienceById);
router.post("/", addExperiences);

export default router;
