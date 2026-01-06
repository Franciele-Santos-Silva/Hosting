import { Router } from "express";
import { Place } from "./model.js";

const router = Router();

router.post("/", async (req, res) => {
  const {
    title,
    city,
    photos,
    description,
    extras,
    price,
    perks,
    checkin,
    checkout,
    guests,
  } = req.body;

  try {
    const NewPlaceDoc = await Place.create({
      owner,
      title,
      city,
      photos,
      description,
      extras,
      perks,
      price,
      checkin,
      checkout,
      guests,
    });
    res.json(NewPlaceDoc);
  } catch (error) {
    console.log(error);
    res.status(500).json("Deu erro ao criar novo lugar");
  }
});

export default router;
