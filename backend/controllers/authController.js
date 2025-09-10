//authcontroller.js
const express = require("express");
const Users = require("../models/User");
const jwt = require("jsonwebtoken");

// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" }); // Fixed expireIn to expiresIn
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Find user by email
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email is not registered, please sign up" });
    }

    // Compare password
    const isValid = await user.comparePassword(password); // Await the async method
    if (!isValid) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // Generate token
    const token = generateToken(user._id);
    return res.status(200).json({
      message: "Successfully logged in",
      id: user._id,
      user: {
        fullname: user.fullname,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error("Error in loginUser:", error); // Use console.error for errors
    return res.status(500).json({ message: "Error logging in user", error: error.message });
  }
};

const registerUser = async (req, res) => {
  const { email, password,fullname, profileImageUrl} = req.body;

  // Validate input
  if (!email || !password || !fullname) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered. Please login." });
    }

    // Create new user
    const newUser = await Users.create({
      email,
      password,
      fullname,
      profileImageUrl
    });

    // Generate JWT token
    const token = generateToken(newUser._id);

    // Send response without password
    return res.status(201).json({
      message: "Successfully registered",
      id: newUser._id,
      user: {
        fullname: newUser.fullname,
        email: newUser.email,
        profileImageUrl:profileImageUrl
      },
      token,
    });
  } catch (error) {
    console.error("Error in registering user:", error);
    return res.status(500).json({ message: "Error in registering user", error: error.message });
  }
};

const getUserInfo = async(req,res)=>{
  try{
     if(req.userId)
     {
      const user = await Users.findById(req.userId).select("-password");
      if(user)
      {
        res.status(200).json(user);
      }
     }
    }catch(error){
      res.status(401).json({message:"Error in fetching user" , error:error.message});
    }
}

module.exports = { loginUser ,registerUser,getUserInfo };