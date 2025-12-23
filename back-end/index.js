import "dotenv/config";
import express from "express";
import { connectDb } from "./config/db.js";

const app = express();
const { PORT } = process.env;

connectDb();

app.get('/users', (req, res) => {
    res.json({ ola: "Olá, mundo!!!" })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
