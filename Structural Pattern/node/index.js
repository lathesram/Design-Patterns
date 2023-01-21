import express from "express";
import calc from "./calc";

const app = express();
const PORT = 3000;
const num = calc();

app.get("/calc", (req, res) => res.send(`The Number is  ${num}`));

app.get("/", (req, res) =>
  res.send(`Node and express server is running on port ${PORT}`)
);


app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
