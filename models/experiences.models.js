import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    experienceName: {
      type: String,
      required: [true, "Please provide experience name."],
    },
    location: {
      type: String,
      required: [true, "Please provide location."],
    },
    imageUrl: {
      type: String,
      required: [true, "Please provide image URL for the experience."],
    },
    details: {
      type: String,
      requried: true,
    },
    about: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Please provide price of experience."],
    },
    slots: [
      {
        date: { type: Date, required: true },
        time: { type: String, required: true },
        available: { type: Boolean, default: true },
        capacity: { type: Number, default: 0 },
        booked: { type: Number, default: 0 },
      },
    ],
  },
  { timestamps: true }
);

export const Experience = mongoose.model("Experience", experienceSchema);
