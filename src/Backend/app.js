const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { mongoose, User } = require("./mongoose");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ status: "error", message: "User not found. Please sign up to proceed." });
    }

    if (password === user.password) {
      res.json({ status: "success", user });
    } else {
      res.json({ status: "error", message: "Invalid credentials. Please try again." });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ status: "error", message: "Something went wrong. Please try again later." });
  }
});

app.post("/signup", async (req, res) => {
    console.log(req.body)
    const { username, email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.json({ status: "error", message: "User already exists. Please login or use a different email." });
      }
  
      // Create a new user and save it to the database
      const newUser = new User({ username, email, password });
      await newUser.save();
  
      // Respond with a success message and the user's information
      res.json({ status: "success", user: newUser });
    } catch (error) {
      console.error("Signup error:", error);
      console.log("error in api")
      res.status(500).json({ status: "error", message: "Error in SignUp API" });
    }
  });

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
