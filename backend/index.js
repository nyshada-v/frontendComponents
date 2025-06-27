const express = require("express");
const connectDB = require("./db");
const cors = require("cors");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
    res.send("👋 Hello from backend");
});

// Optional: connect and do something with MongoDB
app.get("/api/test", async (req, res) => {
    const db = await connectDB();
    const users = await db.collection("users").find().toArray();
    res.json(users);
});

app.listen(3000, () => console.log("🚀 Backend running on http://localhost:3000"));
