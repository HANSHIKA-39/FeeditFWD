if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const cors = require("cors");

//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Connect backend to frontend
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// Routes
app.get("/api/test", (req, res) => {
  res.json({ message: "Connected to backend successfully!" });
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});