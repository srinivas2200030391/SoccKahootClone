const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const AdminModel = mongoose.model("Admin", AdminSchema);

module.exports = AdminModel;
