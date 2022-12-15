const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

// Below are all the CRUD operations (Post, Get, Put, Delete)

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }

  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be up to 6 characters");
  }

  // check if user email already exist
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("Email has already registered");
  }

  // create new user account
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    const { _id, name, email, photo, bio } = user;
    res.status(201).json({
      _id,
      name,
      email,
      photo,
      phone,
      bio,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Get User Data
const getUser = asyncHandler(async (req, res) => {
  // res.send("Get User Data");
  const user = await User.find();
  if (user.length === 0) {
    throw new Error("No User found");
  }
  res.send(user);
});

// update User
const updateUser = asyncHandler(async (req, res) => {
  // get user id
  const id = req.params.id;
  const existingUser = await User.findById(id);

  if (!existingUser) {
    res.status(404);
    throw new Error("User not found");
  }
  const { name, email, photo, phone, bio } = req.body;

  const updatedUser = await existingUser.updateOne({
    name,
    email,
    phone,
    phone,
    bio,
  });

  res.status(201).json({
    email: updatedUser.email || email,
    name: updatedUser.name || name,
    photo: updatedUser.photo || photo,
    phone: updatedUser.phone || phone,
    bio: updatedUser.bio || bio,
  });
});

const deleteUser = asyncHandler(async (req, res) => {
  // get user id
  const id = req.params.id;
  const existingUser = await User.findById(id);

  if (!existingUser) {
    res.status(404);
    throw new Error("User not found");
  }

  await existingUser.deleteOne();

  res.send("User deleted");
});

module.exports = {
  registerUser,
  getUser,
  updateUser,
  deleteUser,
};
