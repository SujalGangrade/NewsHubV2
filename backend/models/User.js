const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Added unique constraint
    password: { type: String, required: true },
    profileImageUrl:{type:String},
  },
  { timestamps: true } // Corrected typo from timeStamps to timestamps
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method
UserSchema.methods.comparePassword = async function (candidatePass) {
  return await bcrypt.compare(candidatePass, this.password);
};

module.exports = mongoose.model("User", UserSchema); // Corrected export

