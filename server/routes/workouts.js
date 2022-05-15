const express = require("express");

const workoutRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

workoutRoutes.route("/workouts").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("workouts")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// workoutRoutes.route("/workout/:id").get(function (req, res) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId(req.params.id) };
//   db_connect.collection("workouts").findOne(myquery, function (err, result) {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// // Create a new workout.
// workoutRoutes.route("/workout/add").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let workout = {
//     name: req.body.name,
//     bodypart: req.body.bodypart,
//     weight: req.body.weight,
//     sets: req.body.sets,
//     reps: req.body.reps,
//   };
//   db_connect.collection("workouts").insertOne(workout, function (err, res) {
//     if (err) throw err;
//     response.json(res);
//   });
// });

// // Update workout by id.
// workoutRoutes.route("/update/:id").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId(req.params.id) };
//   let newvalues = {
//     $set: {
//       name: req.body.name,
//       bodypart: req.body.bodypart,
//       weight: req.body.weight,
//       sets: req.body.sets,
//       reps: req.body.reps,
//     },
//   };
// });

// // Delete a workout
// workoutRoutes.route("/:id").delete((req, response) => {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId(req.params.id) };
//   db_connect.collection("workouts").deleteOne(myquery, function (err, obj) {
//     if (err) throw err;
//     console.log("workout deleted");
//     response.json(obj);
//   });
// });

module.exports = workoutRoutes;
