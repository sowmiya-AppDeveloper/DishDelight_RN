const mongoose = require('mongoose');
const {Schema} = mongoose;

const categoriesRecipeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        type: String,
        required: true,
      },
    ],
    instructions: [
      {
        type: String,
        required: true,
      },
    ],

    image: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {timestamps: true},
);

module.exports = mongoose.model('categoriesRecipe', categoriesRecipeSchema);
