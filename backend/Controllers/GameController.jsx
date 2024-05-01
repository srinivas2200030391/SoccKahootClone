const game = require("../Models/GameModel.jsx");

const viewGame = async (request, response) => {
  try {
    const data = game.find({ email: request.params.email });
    response.send(data);
  } catch (error) {
    response.status(500).send(error.message);
  }
};
const createGame = async (request, response) => {
  try {
    const data = request.body;
    //console.log(data["questions"]);
    const games = new game({
      title: data.title,
      email: data.email,
      isStart: data.isStart,
      questions: data.questions,
    });
    //console.log(JSON.stringify(games));
    //games["questions"] = data["questions"]
    //console.log(games["isStart"]);
    await games.save();
    response.status(200).send("Success");
  } catch (error) {
    response.status(500).send(error.message);
  }
};

module.exports = {
  viewGame,
  createGame,
};
