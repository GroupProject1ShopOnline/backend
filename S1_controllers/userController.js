const express = require("express");
const mongoose = require("mongoose");
const User = require("../S2_Schemas/userSchema");
const Item = require("../S2_Schemas/itemSchema");
const Start = require("../S2_Schemas/startSchema");

const router = express.Router();

const addUser = async (req, res) => {
  const user = req.body;
  console.log(req.body.name);
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      city: req.body.city,
      state: req.body.state,
      password: req.body.password,
    });
    const createUser = await newUser.save();
    console.log(JSON.stringify(createUser));
    res.send({
      _id: createUser._id,
      name: createUser.name,
      email: createUser.email,
      city: createUser.city,
      state: createUser.state,
      password: user.password,
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};
const addItem = async (req, res) => {
  const item = req.body;
  console.log(`addItem (server): ${req.body.state}`);
  try {
    const newItem = new Item({
      _id: req.body._id,
      sender: req.body.sender,
      title: req.body.title,
      description: req.body.description,
      cpa: req.body.cpa,
      pid: req.body.pid,
      city: req.body.city,
      state: req.body.state,
      images: req.body.images,
    });
    const createItem = await newItem.save();
    console.log(JSON.stringify(createItem));
    res.send({
      _id: createItem._id,
      sender: createItem.sender,
      title: createItem.title,
      description: createItem.description,
      cpa: createItem.cpa,
      pid: createItem.pid,
      city: createItem.city,
      state: createItem.state,
      images: createItem.images,
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    // const newStart = new Start({
    //   userID: req.body.userID,
    //   pass: req.body.pass,
    // });
    const { userID, pass } = req.body;
    console.log(`login search ${userID} ${pass}`);
    const data = await User.find({ email: userID });
    console.log(data);
    const password = data[0].password;

    if (password === pass) res.send(data);
    else res.send({ message: "invalid" });
  } catch (error) {
    res.send({ message: error.message });
  }
};
module.exports = { router, addUser, addItem, getUser };
