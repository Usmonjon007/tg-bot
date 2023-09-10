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

app.listen(process.env.PORT || 443, () => {
  console.log(`Server is running on port ${process.env.PORT || 443}`);
});
