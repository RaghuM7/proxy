// server.js
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes

app.get("/trump-feed", async (req, res) => {
  try {
    const response = await fetch("https://trumpstruth.org/feed");
    const body = await response.text();
    res.set("Content-Type", "application/rss+xml");
    res.send(body);
  } catch (error) {
    res.status(500).send("Error fetching RSS feed");
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
