const db = require("../models/fitness");
// requires Workout from fitness.js

module.exports = {
  newWorkout: (req, res) => {
    db.Workout.create(req.body)
      .then((workout) => {
        res.send(workout);
      })
      .catch((err) => {
        // .json() returns the res to the client in addition to setting it to json
        res.json(err);
      });
  },

  getWorkout: (req, res) => {
    if (!req.query.id) {
      db.Workout.find({})
        .then((allWorkouts) => res.send(allWorkouts))
        .catch((err) => res.send(err));
    } else {
      db.Workout.findById(req.query.id)
        .then((foundWorkout) => res.send(foundWorkout))
        .catch((err) => res.send(err));
    }
  },

  addExercise: async (req, res) => {
    try {
      const workout = await db.Workout.findById(req.params.id);

      // workout.exercises is an array
      workout.exercises.push(req.body);
      let totalDuration = 0;
      await workout.exercises.forEach((exercise) => {
        console.log("exercise", exercise);
        totalDuration = totalDuration + exercise.duration;
      });
      workout.totalDuration = totalDuration;
      await workout.save();
      res.send(workout);
      console.log(workout);
    } catch (err) {
      res.send(err);
    }
  },

  deleteWorkout: (req, res) => {
    db.Workout.findByIdAndDelete(req.query.id)
      .then(() => res.send({ msg: "success" }))
      .catch((err) => res.send(err));
  },
};
