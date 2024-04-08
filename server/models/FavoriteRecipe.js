const mongoose = require("mongoose");
const { Schema } = mongoose;

const favoriteRecipe = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    ingredients: [
      {
        type: String,
        require: true,
      },
    ],
    instructions: [
      {
        type: String,
        require: true,
      },
    ],
    country: {
      type: String, // Make it optional by removing 'required: true'
    },
    image: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
    },
    id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
    },
    userId: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("favRecipe", favoriteRecipe);
