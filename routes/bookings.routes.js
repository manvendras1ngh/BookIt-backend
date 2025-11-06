import express from "express";
import { createBooking } from "../controllers/bookings.controllers.js";

const router = express.Router();

router.post("/", createBooking);

export default router;
