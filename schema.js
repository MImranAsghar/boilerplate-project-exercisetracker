const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  user: String,
  exercise: {
    desc: String,
    timeDuration: Number,
    date: {type: Date, default: Date.now}
  }
});

module.exports = {
  exerciseSchema: exerciseSchema
};
