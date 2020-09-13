const express = require("express");
const router = express.Router();

const {
  newWorkout,
  getWorkout,
  addExercise,
  deleteWorkout,
} = require("../controllers/fitness-controller");

router.get("/api/workouts", getWorkout);
router.get("/api/workouts/range", getWorkout);

router.put("/api/workouts/:id", addExercise);
router.post("/api/workouts", newWorkout);
router.delete("/api/workouts", deleteWorkout);

module.exports = router;
