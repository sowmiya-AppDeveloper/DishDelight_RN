const express = require('express');

const router = express.Router();

// controllers
const {
  signup,
  signin,
  forgotPassword,
  resetPassword,
  requireSignIn,
  uploadImage,
  updatePassword,
  insertMyRecipes,
  getAllRecipes,
  getUserImage,
  deleteRecipes,
  getAllCategoriesRecipes,
  updateRating,
  getRatings,
  getAllReview,
  getRecommendedRating,
  getSingleRecipe,
  paymentProcess,
} = require('../controllers/auth');

router.get('/', (req, res) => {
  return res.json({
    data: 'hello world from kaloraat auth API',
  });
});
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/upload-image', requireSignIn, uploadImage);
router.post('/update-password', requireSignIn, updatePassword);
router.post('/insert-recipe', insertMyRecipes);
router.post('/getAll-recipes', getAllRecipes);
router.post('/getUser-image', requireSignIn, getUserImage);
router.post('/delete-recipes', deleteRecipes);
router.post('/getAll-categories-recipes', getAllCategoriesRecipes);
router.post('/updateRating', updateRating);
router.post('/getRatings', getRatings);
router.post('/getAllReview', getAllReview);
router.post('/getRecommendedRating', getRecommendedRating);
router.post('/getSingleRecipe', getSingleRecipe);
router.post('/pay', paymentProcess);
module.exports = router;
