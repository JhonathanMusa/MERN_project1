import mongoose from "mongoose";
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("User", usersSchema);

export default User;
