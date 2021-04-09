// const express = require("express");
// var Mathqrouter = express.Router();
// const cors = require("cors");
// Mathqrouter.use(cors());
// Mathqrouter.use(express.json());
// const Mathdata = require("../models/Mathdata");

// function router() {
//   Mathqrouter.get("/mathq", function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS"
//     );
//     Mathdata.find().then(function (mathqs) {
//       res.send(mathqs);
//     });
//   });

//   Mathqrouter.post("/insert", function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS"
//     );
//     console.log(req.body);
//     var mathq = {
//       topic: req.body.mathq.topic,
//       question: req.body.mathq.question,
//       hint1: req.body.mathq.hint1,
//       hint2: req.body.mathq.hint2,
//       hint3: req.body.mathq.hint3,
//       imageUrl: req.body.mathq.imageUrl,
//     };
//     var mathq = new Mathdata(mathq);
//     mathq.save();
//   });
//   return Mathqrouter;
// }
// module.exports = router;
