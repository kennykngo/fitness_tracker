const db = require("../models/fitness");
// requires Workout from fitness.js

const fitnessController = () => {
  newWorkout: (req, res) => {
    db.Workout.create(req.body)
      .then((workout) => {
        res.send(workout);
      })
      .catch((err) => {
        // .json() returns the res to the client in addition to setting it to json
        res.json(err);
      });
  };

  getWorkout: (req, res) => {
    if (!req.query.id) {
      db.Workout.find({})
        .then((allWorkouts) => res.send(allWorkouts))
        .catch((err) => res.send(err));
    }
  };

  addExercise: async (req, res) => {
    try {
      const workout = await db.Wokrout.findById(req.params.id);

      // workout.exercises is an array
      workout.exercises.push(req.body);
      let totalDuration = 0;
      await workout.exercises.forEach((exercise) => {
        console.log("exercise", exercise);
        totalDuration = totalDuration + exercise.duration;
      });
    } catch (err) {
      res.send(err);
    }
  };

  deleteWorkout: (req, res) => {
    db.Workout.findByIdAndDelete(req.query.id)
      .then(() => res.send({ msg: "success" }))
      .catch((err) => res.send(err));
  };
};

module.exports = fitnessController;
