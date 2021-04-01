const express = require("express");
const app = express();

// Init Firebase and catch any errors when booting
require("./utils/firebase");

const getWatchlist = require("./handlers/getWatchlist");
const addToWatchlist = require("./handlers/addToWatchlist");
const removeFromWatchlist = require("./handlers/removeFromWatchlist");

const PORT = 3000;

app.use(express.json());

app.get("/watchlist/:userId", getWatchlist);
app.post("/watchlist/:userId", addToWatchlist);
app.delete("/watchlist/:userId/:movieId", removeFromWatchlist);

app.get("/status", async (_req, res) => {
  res.status(200).json({ status: "OK" });
});

app.get("/", (_req, res) => {
  res.status(200).json({});
});

app.listen(PORT, () => {
  console.log(`=> Server Started`);
});

module.exports = app;
