//accessing mongoose package
const mongoose = require("mongoose");
//database connection
mongoose.connect(
  "mongodb+srv://userone:userone@fsdfiles.ljhxf.mongodb.net/SkillUpDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
//schema definition
const Schema = mongoose.Schema;
//constructor
var NewSsSchema = new Schema({
  topic: String,
  question: String,
  hint1: String,
  hint2: String,
  hint3: String,
  imageUrl: String,
});
//model creation
var Ssqn = mongoose.model("ssq", NewSsSchema);
//exporting the model
module.exports = Ssqn;
