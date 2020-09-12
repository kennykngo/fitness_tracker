const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  type: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
});
