const game = require("../Models/GameModel.jsx");
const admin = require("../Models/AdminModel.jsx");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const create = async (request, response) => {
  try {
    const s = await request.body;
    const password = bcrypt.hashSync(s["password"], salt);
    s["password"] = password;

    console.log(s);

    const users = new admin(s);
    await users.save();
    response.send("Registered Successfully");
    response.status(201).json({
      msg: users,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const login = async (request, response) => {
  try {
    const s = await request.body;

    const id = Object.values(s)[0];

    const password = Object.values(s)[1];
    const data = await admin.find({ $or: [{ email: id }, { username: id }] });

    if (data) {
      const p = bcrypt.compareSync(
        password,
        Object.values(data)[0]["password"]
      );
      if (p) {
        console.log("Successful");
        // const token = jwt.sign(
        //   { userId: data[0]._id, role: role },
        //   process.env.JWT_SECRET,
        //   { expiresIn: "1h" } // Token expires in 1 hour
        // );
        response.json(data);
      }
    } else {
      response.status(500).send("Invalid Credentials");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};
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
  create,
  login,
};
