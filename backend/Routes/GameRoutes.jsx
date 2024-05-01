const express = require("express");
const response = express.Router();
const game = require("../Controllers/GameController.jsx");

response.get("/library/:email", game.viewGame);
response.post("/create", game.createGame);

module.exports = response;
