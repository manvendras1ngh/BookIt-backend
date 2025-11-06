import { asyncWrapper } from "../utils/asyncWrapper.js";
import { Promo } from "../models/promo.models.js";

export const validatePromo = asyncWrapper(async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res
      .status(400)
      .json({ valid: false, message: "Promo code required" });
  }

  const promo = await Promo.findOne({ code, active: true });

  if (!promo) {
    return res
      .status(404)
      .json({ valid: false, message: "Invalid promo code" });
  }

  if (new Date(promo.expiryDate) < new Date()) {
    return res
      .status(400)
      .json({ valid: false, message: "Promo code expired" });
  }

  res.status(200).json({
    valid: true,
    discountAmount: promo.discountAmount,
    message: "Promo code applied successfully",
  });
});

export const addDefaultPromos = asyncWrapper(async (req, res) => {
  //promo codes to add
  const promos = [
    {
      code: "SAVE10",
      discountAmount: 10,
      expiryDate: new Date("2025-12-31"),
      active: true,
    },
    {
      code: "FLAT100",
      discountAmount: 100,
      expiryDate: new Date("2025-12-31"),
      active: true,
    },
    {
      code: "FLAT200",
      discountAmount: 200,
      expiryDate: new Date("2025-11-04"),
      active: false,
    },
  ];

  const existing = await Promo.find({
    code: { $in: promos.map((p) => p.code) },
  });

  if (existing.length > 0) {
    return res
      .status(400)
      .json({ message: "One or both promo codes already exist." });
  }

  const insertedPromos = await Promo.insertMany(promos);

  res.status(201).json({
    message: "Promo codes added successfully.",
    data: insertedPromos,
  });
});
