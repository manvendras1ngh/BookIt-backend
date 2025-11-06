import { Experience } from "../models/experiences.models.js";
import asyncWrapper from "../utils/asyncWrapper.js";

export const addExperiences = asyncWrapper(async (req, res) => {
  const { experiences } = req.body;

  if (!experiences || !Array.isArray(experiences)) {
    throw new Error("Invalid or missing 'experiences' array");
  }
  await Experience.deleteMany();

  const newExperiences = experiences.map((exp) => ({
    experienceName: exp.experienceName,
    location: exp.location,
    imageUrl: exp.imageUrl,
    details: exp.details,
    about: exp.about,
    price: exp.price,
    slots: exp.slots,
  }));

  const savedExperiences = await Experience.insertMany(newExperiences);

  res.status(201).json({
    success: true,
    data: savedExperiences,
  });
});

export const getExperiences = asyncWrapper(async (req, res) => {
  const experiences = await Experience.find();

  if (!experiences) {
    return res.status(404).json({ error: "No Experience found!" });
  }

  res.status(200).json({
    message: "All Experiences",
    data: experiences,
  });
});

export const getExperienceById = asyncWrapper(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Id not present!" });
  }

  const experience = await Experience.findById({ _id: id });

  if (!experience) {
    return res.status(404).json({ error: "Experience not found!" });
  }

  res.status(200).json({
    message: "Experience found.",
    data: experience,
  });
});
