import "dotenv/config";
import express from "express";
import { connectDb } from "./config/db.js";
import User from "./domains/users/model.js";
import bcrypt from 'bcryptjs';

const app = express();
const { PORT } = process.env;
const bcryptSalt = bcrypt.genSaltSync();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
