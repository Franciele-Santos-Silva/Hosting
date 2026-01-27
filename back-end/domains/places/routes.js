import { Router } from "express";
import { Place } from "./model.js";
import { JWTVerify } from "../../ultils/jwt.js";
import { connectDb } from "../../config/db.js";
import { downloadImage } from "../../ultils/imageDownloader.js";
import { __dirname } from "../../index.js";

const router = Router();

router.post("/", async (req, res) => {
  connectDb();

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
    const { _id: owner } = await JWTVerify(req);

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

router.post("/upload/link", async (req, res) => {
  const { link } = req.body;

  try {
    const filename = await downloadImage(link, `${__dirname}/tmp/`);

    res.json(filename);
  } catch (error) {
    console.log(error);
    res.status(500).json("Deu erro ao baixar a imagem");
  }
});

export default router;
