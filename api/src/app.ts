import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = 4000;

app.get("/", (req, res) => res.send("Olá mundo"));

app.listen(PORT, () =>
  console.log(
    `Rodando em http://localhost:${PORT}/ ${process.env.POSTGRES_USER || ''}`
  )
);
