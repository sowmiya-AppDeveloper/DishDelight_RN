const mongoose = require("mongoose");
const { Schema } = mongoose;

const ratingSchema = new Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    userId: {
      type: String,
      required: true,
    },
    reviews: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    userImage: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ratingTable", ratingSchema);
