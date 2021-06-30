const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");
const Mathdata = require("./models/Mathdata");
const Scienceqn = require("./models/Scienceqn");
const Engqn = require("./models/Engqn");
const Ssqn = require("./models/Ssqn");
const Userdata = require("./models/Userdata");
var app = new express();
app.use(express.json());
app.use(cors());
// const Mathqrouter = require("./routes/mathqroute");
// const Scienceqrouter = require("./routes/scienceqroute");

app.use(
  express.urlencoded({
    extended: true,
  })
);

// app.use("/math", Mathqrouter);
// app.use("/science", Scienceqrouter);

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("Unauthorized request");
  }
  let payload = jwt.verify(token, "secretKey");
  if (!payload) {
    return res.status(401).send("Unauthorized request");
  }
  req.userId = payload.subject;
  next();
}

//GET

app.get("/mathq", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
  Mathdata.find().then(function (mathqs) {
    res.send(mathqs);
  });
});
app.get("/scienceq", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
  Scienceqn.find().then(function (scienceqs) {
    res.send(scienceqs);
  });
});
app.get("/engq", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
  Engqn.find().then(function (engqs) {
    res.send(engqs);
  });
});
app.get("/ssq", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
  Ssqn.find().then(function (ssqs) {
    res.send(ssqs);
  });
});

app.get("/user/:username", (req, res) => {
  const username = req.params.username;
  Userdata.findOne({ username: username }).then((user) => {
    res.send(user);
  });
});

//POST

app.post("/login", (req, res) => {
  let username = req.body.uname;
  let password = req.body.pw;
  let role = req.body.role;
  Userdata.findOne(
    {
      $and: [{ username: username }, { password: password }, { role: role }],
    },
    function (err, user) {
      if (user) {
        let payload = { subject: username + password + role };
        let token = jwt.sign(payload, "secretKey");
        res.status(200).send({ token });
      } else {
        res.status(401).send("User does not exist");
      }
    }
  );
});

app.post("/signup", (req, res) => {
  var newuser = {
    username: req.body.uname,
    password: req.body.pw,
    email: req.body.email,
    role: req.body.role,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    subject: req.body.subject,
    vark: req.body.vark,
  };
  var user = new Userdata(newuser);
  user
    .save()
    .then(function () {
      let payload = {
        subject: newuser.username + newuser.password + newuser.role,
      };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.post("/insert", verifyToken, function (req, res) {
  console.log("Subject is:", req.body.quest.subject);
  var quest = {
    subject: req.body.quest.subject,
    topic: req.body.quest.topic,
    question: req.body.quest.question,
    hint1: req.body.quest.hint1,
    hint2: req.body.quest.hint2,
    hint3: req.body.quest.hint3,
    imageUrl: req.body.quest.imageUrl,
  };
  console.log(quest);
  if (quest.subject == "4") {
    var quest = new Engqn({
      topic: req.body.quest.topic,
      question: req.body.quest.question,
      hint1: req.body.quest.hint1,
      hint2: req.body.quest.hint2,
      hint3: req.body.quest.hint3,
      imageUrl: req.body.quest.imageUrl,
    });
  }
  if (quest.subject == "1") {
    var quest = new Mathdata({
      topic: req.body.quest.topic,
      question: req.body.quest.question,
      hint1: req.body.quest.hint1,
      hint2: req.body.quest.hint2,
      hint3: req.body.quest.hint3,
      imageUrl: req.body.quest.imageUrl,
    });
  }
  if (quest.subject == "2") {
    var quest = new Scienceqn({
      topic: req.body.quest.topic,
      question: req.body.quest.question,
      hint1: req.body.quest.hint1,
      hint2: req.body.quest.hint2,
      hint3: req.body.quest.hint3,
      imageUrl: req.body.quest.imageUrl,
    });
  }
  if (quest.subject == "3") {
    var quest = new Ssqn({
      topic: req.body.quest.topic,
      question: req.body.quest.question,
      hint1: req.body.quest.hint1,
      hint2: req.body.quest.hint2,
      hint3: req.body.quest.hint3,
      imageUrl: req.body.quest.imageUrl,
    });
  }

  quest.save();
});

app.post("/insertmath", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET ,POST,PATCH,PUT,DELETE,OPTIONS"
  );
  console.log(req.body);

  var mathq = {
    topic: req.body.mathq.topic,
    question: req.body.mathq.question,
    hint1: req.body.mathq.hint1,
    hint2: req.body.mathq.hint2,
    hint3: req.body.mathq.hint3,
    imageUrl: req.body.mathq.imageUrl,
  };
  var mathq = new Mathdata(mathq);
  mathq.save();
});

app.post("/insertsci", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET ,POST,PATCH,PUT,DELETE,OPTIONS"
  );
  console.log(req.body);
  var scienceq = {
    topic: req.body.scienceq.topic,
    question: req.body.scienceq.question,
    hint1: req.body.scienceq.hint1,
    hint2: req.body.scienceq.hint2,
    hint3: req.body.scienceq.hint3,
    imageUrl: req.body.scienceq.imageUrl,
  };
  var scienceq = new Scienceqn(scienceq);
  scienceq.save();
});

app.post("/insertss", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET ,POST,PATCH,PUT,DELETE,OPTIONS"
  );
  console.log(req.body);
  var ssq = {
    topic: req.body.scienceq.topic,
    question: req.body.scienceq.question,
    hint1: req.body.scienceq.hint1,
    hint2: req.body.scienceq.hint2,
    hint3: req.body.scienceq.hint3,
    imageUrl: req.body.scienceq.imageUrl,
  };
  var ssq = new Ssqn(ssq);
  ssq.save();
});

app.post("/inserteng", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET ,POST,PATCH,PUT,DELETE,OPTIONS"
  );
  console.log(req.body);
  var engq = {
    topic: req.body.engq.topic,
    question: req.body.engq.question,
    imageUrl: req.body.engq.imageUrl,
  };
  var engq = new Engqn(engq);
  engq.save();
});

app.listen(5000, function () {
  console.log("Listening on port", port);
});
