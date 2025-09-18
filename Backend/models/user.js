const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  // username: String,
  email: { type: String, required: true, unique: true },
  profilePicture: {
    type: String,
    default:
      "https://res.cloudinary.com/demo/image/upload/v1690000000/default-avatar.png",
  },
  bio: {
    type: String,
    trim: true,
    maxlength: 300,
  },
  // location: { type: String, trim: true },
  bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  dateOfBirth: { type: Date }, 
  password: { type: String, required: true },
  resetToken: String,
  resetTokenExpiry: Date,
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("User", userSchema);
