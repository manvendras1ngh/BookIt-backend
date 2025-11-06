import { asyncWrapper } from "../utils/asyncWrapper.js";
import { Booking } from "../models/bookings.models.js";
import { Experience } from "../models/experiences.models.js";

export const createBooking = asyncWrapper(async (req, res) => {
  const {
    experienceId,
    fullName,
    email,
    quantity,
    date,
    time,
    totalPrice,
    discountApplied,
    promoCode,
  } = req.body;

  if (
    !experienceId ||
    !fullName ||
    !email ||
    !quantity ||
    !date ||
    !time ||
    !totalPrice
  ) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const experience = await Experience.findById(experienceId);
  if (!experience) {
    return res.status(404).json({ error: "Experience not found." });
  }

  const newBooking = new Booking({
    experienceId,
    fullName,
    email,
    quantity,
    date,
    time,
    totalPrice,
    discountApplied,
    promoCode,
  });

  const savedBooking = await newBooking.save();

  res.status(201).json({
    message: "Booking created successfully.",
    bookingId: savedBooking._id,
  });
});
