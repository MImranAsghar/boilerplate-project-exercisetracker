const mySchema = require('./schema');
const mongoose = require('mongoose');

let theModel = mongoose.model("theModel", schemas.exerciseSchema);

module.exports = {
  theModel: theModel
}
