//accessing mongoose package
const mongoose = require("mongoose");
//database connection
mongoose.connect(
  "mongodb+srv://userone:userone@fsdfiles.ljhxf.mongodb.net/SkillUpDB?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//schema definition
const Schema = mongoose.Schema;
//constructor
const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  role: String,
  city: String,
  state: String,
  country: String,
  subject: String,
  vark: String,
});
//model creation
var Userdata = mongoose.model("userdata", userSchema);
//exporting the model
module.exports = Userdata;
