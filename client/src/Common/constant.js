import config from "../../config";

export const testingUrl = "http://172.16.16.26:8002/api/";
// export const testingUrl =
//   "https://bm.learning.betalearnings.com/dishdelight/api/";
export const isTesting = true;
export const AuthToken = "Bearer ";

export const GET_API_DATA = "GET_API_DATA";
export const API_DATA_LOADING = "API_DATA_LOADING";
export const API_DATA_ERROR = "API_DATA_ERROR";
export const API_DATA_RECEIVED = "API_DATA_RECEIVED";
export const RECEIVED_API_DATA = "RECEIVED_API_DATA";
export const RESET_REDUX_STORE = "RESET_REDUX_STORE";
export const ActionConstants = {
  SIGN_UP: "SIGN_UP",
  SIGN_IN: "SIGN_IN",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  RESET_PASSWORD: "RESET_PASSWORD",
  GET_ALL_RECIPES: "GET_ALL_RECIPES",
  GET_USER_IMAGE: "GET_USER_IMAGE",
  UPLOAD_USER_IMAGE: "UPLOAD_USER_IMAGE",
  GET_CATEGORIES: "GET_CATEGORIES",
  UPDATE_RATING: "UPDATE_RATING",
  GET_RATING: "GET_RATING",
  GET_CATEGORIES2: "GET_CATEGORIES2",
  GET_ALL_REVIEW: "GET_ALL_REVIEW",
  RECOMMENDATION_RATING: "RECOMMENDATION_RATING",
  GET_SINGLE_RECIPE: "GET_SINGLE_RECIPE",
  SAVE_FAVORITES: "SAVE_FAVORITES",
  GET_FAV_RECIPES: "GET_FAV_RECIPES",
  GET_USER_IMAGE_ACCOUNT: "GET_USER_IMAGE_ACCOUNT",
};
/**
|----------------------------------------------------
| Once initiate this using action init spinner in api action
| Then Close properly using  spinnerStop action in api action or 
| in api reducer by setting customSpinner false;
|
| Another method is use another key like custom spinner in your reducer 
| and action to enable it then you can disable it using the reducer return state
|----------------------------------------------------
*/
export const CUSTOM_SPINNER_ENABLE = "CUSTOM_SPINNER_ENABLE";
export const CUSTOM_SPINNER_DISABLE = "CUSTOM_SPINNER_DISABLE";

export const HTTP = {
  // signUp: config.API_URL + "signup",
  // signIn: config.API_URL + "signin",
  // forgotPassword: config.API_URL + "forgot-password",
  // resetPassword: config.API_URL + "reset-password",
  // getAllRecipes: config.API_URL + "getAll-recipes",
  // getUserImage: config.API_URL + "getUser-image",
  // uploadUserImage: config.API_URL + "upload-image",
  // getCategories: config.API_URL + "getAll-categories-recipes",
  // updatedRating: config.API_URL + "updateRating",
  // getRatings: config.API_URL + "getRatings",
  // getAllReview: config.API_URL + "getAllReview",
  // getRecommendationRating: config.API_URL + "getRecommendedRating",
  // getSingleRecipe: config.API_URL + "getSingleRecipe",
  // saveFavorites: config.API_URL + "saveFavoriteRecipes",
  // getFavRecipes: config.API_URL + "getFavRecipes",

  signUp: testingUrl + "signup",
  signIn: testingUrl + "signin",
  forgotPassword: testingUrl + "forgot-password",
  resetPassword: testingUrl + "reset-password",
  getAllRecipes: testingUrl + "getAll-recipes",
  getUserImage: testingUrl + "getUser-image",
  uploadUserImage: testingUrl + "upload-image",
  getCategories: testingUrl + "getAll-categories-recipes",
  updatedRating: testingUrl + "updateRating",
  getRatings: testingUrl + "getRatings",
  getAllReview: testingUrl + "getAllReview",
  getRecommendationRating: testingUrl + "getRecommendedRating",
  getSingleRecipe: testingUrl + "getSingleRecipe",
  saveFavorites: testingUrl + "saveFavoriteRecipes",
  getFavRecipes: testingUrl + "getFavRecipes",

  //urls'

  //Authorized URl's
  // Header For Api Call Without Authorization.
  HEADERS: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  // Header For Api Call With Authorization.
  AuthHeader: {
    "Content-Type": "application/json",
    Accept: "*/*",
    Authorization: AuthToken,
  },

  /** For Multipart Form data add fileUpload = true in action.js
   * Before hitting form data please update the Http.Authorization it will not contain token*/
  // Form Data Header with Authorization
  FormDataHeader: {
    "Content-Type": "multipart/form-data",
    Accept: "*/*",
    Authorization: AuthToken,
  },
};

//handling expire token
