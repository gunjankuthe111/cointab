const express = require("express");
const axios = require("axios");
const UserModel = require("../models/user.model");
const app = express.Router();

app.get("/", async (req, res) => {
  const {page = 1, limit = 10, gender} = req.query;
  try {
    if (gender === "male" || gender === "female") {
      const users = await UserModel.find({gender})
        .skip((+page - 1) * Number(limit))
        .limit(+limit);
      const total = await UserModel.count({gender});
      res.send({users, total});
    } else {
      const users = await UserModel.find()
        .skip((+page - 1) * Number(limit))
        .limit(+limit);

      const total = await UserModel.count();
      res.send({users, total});
    }
  } catch (e) {
    res.send(e);
  }
});

app.post("/", async (req, res) => {
  try {
    const {data} = await axios.get("https://randomuser.me/api/?results=100");
    const users = await UserModel.insertMany([...data.results]);
    res.send(users);
  } catch (e) {
    res.send(e);
  }
});

app.delete("/", async (req, res) => {
  try {
    const users = await UserModel.deleteMany();
    res.send(users);
  } catch (e) {
    res.send(e);
  }
});

module.exports = app;
