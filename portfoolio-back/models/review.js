const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const reviewSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please name the game.",
  },
  slug: String,
  image: String,
  rating: {
    type: Number,
    required: "Please rate the game.",
  },
  review: {
    type: String,
  },
  played: {
    type: String,
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
});

reviewSchema.pre("save", function (next) {
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slugify(this.name);
  next();
});

module.exports = mongoose.model("Revier", reviewSchema);
