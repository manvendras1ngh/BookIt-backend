import mongoose from "mongoose";

const slotSchema = new mongoose.Schema(
  {
    experienceId: {},
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
    capacity: {
      type: Number,
      default: 0,
      required: true,
    },
    booked: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

export const Slot = mongoose.model("Slot", slotSchema);
