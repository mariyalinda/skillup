// const express = require("express");
// var Scienceqrouter = express.Router();
// const Scienceqn = require("../models/Scienceqn");

// function router() {
//   Scienceqrouter.get("/scienceq", function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS"
//     );
//     Scienceqn.find().then(function (scienceqs) {
//       res.send(scienceqs);
//     });
//   });

//   Scienceqrouter.post("/insert", function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Methods: GET ,POST,PATCH,PUT,DELETE,OPTIONS"
//     );
//     console.log(req.body);
//     var scienceq = {
//       topic: req.body.scienceq.topic,
//       question: req.body.scienceq.question,
//       hint1: req.body.scienceq.hint1,
//       hint2: req.body.scienceq.hint2,
//       hint3: req.body.scienceq.hint3,
//       imageUrl: req.body.scienceq.imageUrl,
//     };
//     var scienceq = new Scienceqn(scienceq);
//     scienceq.save();
//   });
//   return Scienceqrouter;
// }
// module.exports = router;
