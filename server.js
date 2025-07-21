require("dotenv").config();

const express = require("express");
const path = require("path");
const { Client } = require("pg");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Setup PostgreSQL connection
const db = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for NeonDB
  },
});

db.connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => console.error("❌ PostgreSQL connection error:", err));

// ✅ Health check endpoint
app.get("/health", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()");
    res.status(200).json({ status: "ok", time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Serve React static files from build
app.use(express.static(path.join(__dirname, "dist", "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "public", "index.html"));
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
