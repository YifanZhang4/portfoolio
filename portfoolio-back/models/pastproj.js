const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const pastpSchema = new Schema({
  name: {
    type: String,
    required: "What's the name of the project?",
  },
  slug: String,
  description: {
    type: String,
  },
  link: {
    type: String,
    required: "Well link the project.",
  },
  langs: [
    {
      type: String,
    },
  ],
});

pastpSchema.pre("save", function (next) {
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slugify(this.name);
  next();
});

module.exports = mongoose.model("PastP", pastpSchema);
