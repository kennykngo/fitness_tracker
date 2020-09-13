const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerSchema = new Schema(
  {
    type: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    distance: {
      type: Number,
      trim: true,
    },
    duration: {
      type: Number,
      trim: true,
    },
    weight: {
      type: Number,
      trim: true,
    },
    reps: {
      type: Number,
      trim: true,
    },
    sets: {
      type: Number,
      trim: true,
    },
  },
  { _id: false }
);

const workSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  totalDuration: {
    type: Number,
    default: 0,
  },

  // utilizing top schema
  exercises: [exerSchema],
});

const Workout = mongoose.model("Workout", workSchema);

// exerSchema > workSchema > Workout
module.exports = { Workout };
