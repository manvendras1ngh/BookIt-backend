import express from "express";
import {
  addDefaultPromos,
  validatePromo,
} from "../controllers/promo.controllers.js";

const router = express.Router();

router.post("/add", addDefaultPromos);
router.post("/validate", validatePromo);

export default router;
