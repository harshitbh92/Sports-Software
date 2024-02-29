const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var QuerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
});

//Export the model
module.exports = mongoose.model("Query", QuerySchema);
