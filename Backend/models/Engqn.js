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
var NewEngSchema = new Schema({
  topic: String,
  question: String,
  imageUrl: String,
});
//model creation
var Engqn = mongoose.model("engq", NewEngSchema);
//exporting the model
module.exports = Engqn;
