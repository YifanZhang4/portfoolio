const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const tagSchema = new Schema({
  name: {
    type: String,
    required: "What is the tag?",
  },
});

tagSchema.pre("save", function (next) {
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slugify(this.name);
  next();
});

module.exports = mongoose.model("Tag", tagSchema);
