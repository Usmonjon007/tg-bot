require("dotenv").config({ path: "./.env" });
require("./bot");

const express = require("express");
const app = express();

app.get("*", (req, res) => {
  res.json({
    ok: false,
    message: "This website for only telegram-bot",
  });
});
