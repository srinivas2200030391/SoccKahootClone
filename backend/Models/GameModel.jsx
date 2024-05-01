const mongoose = require("mongoose");
const crypto = require("crypto");
const GameSchema = new mongoose.Schema({
  pin: {
    type: String,
    default: () => crypto.randomBytes(6).toString("hex"),
  },
  title: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isStart: {
    type: String,
    default: "false",
  },
  questions: [
    {
      question: {
        title: {
          type: String,
          default: "",
        },
        Quiztype: {
          type: String,
          default: "Quiz",
        },
        TimeLimit: {
          type: Number,
          default: 20,
        },
        Image: {
          type: String,
          default: "",
        },
        Options: {
          Option: [
            {
              type: String,
              default: "",
            },
          ],
        },
        Answer: {
          type: String,
          default: "",
        },
      },
    },
  ],
});

const GameModel = mongoose.model("Game", GameSchema);

module.exports = GameModel;
