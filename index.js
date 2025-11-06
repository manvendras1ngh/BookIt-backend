import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

import instantiateConnection from "./db/db.connect.js";
import experienceRoutes from "./routes/experiences.routes.js";
import promoRoutes from "./routes/promo.routes.js";
import bookingRoutes from "./routes/bookings.routes.js";

//server config
const app = express();
configDotenv({ path: "./.env" });
const PORT = process.env.PORT || 5175;

//db connection
try {
  instantiateConnection();
} catch (error) {
  throw error;
}

//server settings
app.use(express.json({ limit: "16kb" }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//user defined routes
app.get("/", (req, res) => {
  res.json({ message: "Experience App Home address" });
});

app.use("/api/v1/experience", experienceRoutes);
app.use("/api/v1/promo", promoRoutes);
app.use("/api/v1/booking", bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server running on address, 'http://localhost:${PORT}'`);
});
