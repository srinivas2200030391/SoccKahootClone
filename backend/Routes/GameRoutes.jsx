const express = require("express");
const response = express.Router();
const game = require("../Controllers/GameController.jsx");
response.post("/create", game.create);
response.get("/library/:email", game.viewGame);
response.post("/createGame", game.createGame);
response.post("/login", game.login);
module.exports = response;
