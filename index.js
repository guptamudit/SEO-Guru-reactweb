const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user"); // Assuming you have a User model defined

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// Connect to the MongoDB database
mongoose.connect(
  "",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.post("/contact", async (req, res) => {
  const { email, userName } = req.body;
  try {
    const userDoc = await User.create({
      userName,
      email,
    });
    res.json(userDoc);
  } catch (e) {
    console.error("Error creating user:", e);
    res.status(400).json({ error: "User creation failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
