import {
  API_DATA_ERROR,
  API_DATA_LOADING,
  ActionConstants,
  CUSTOM_SPINNER_DISABLE,
  CUSTOM_SPINNER_ENABLE,
  RECEIVED_API_DATA,
} from "../Common/constant";
import { LOG } from "../Common/utils";

const initialState = {
  recipesList: [],
  ratingData: [],
  uploadImage: {},
  getUserData: "",
  getCategoriesList: [],
  getRating: [],
  getAllReviewList: [],
  singleRecipeData: {},
  getFavRecipes: [],
};
const apiReducer = (state = initialState, action) => {
  LOG("<<<<== Auth Reducer ==>>>> ");

  switch (action.type) {
    // LOGIN RESPONSE WILL BE HANDLES HERE WE WILL get userDetails, and authToken.
    case RECEIVED_API_DATA:
      return Object.assign({}, state, {
        isConnectedToRemote: false,
        isLoadingApi: false,
        indicatorLoading: false,
      });

    case API_DATA_ERROR:
      LOG("API DATA ERROR:::" + JSON.stringify(action.jsonData));

      return Object.assign({}, state, {
        isConnectedToRemote: false,
        isLoadingApi: false,
        indicatorLoading: false,
        apiError: true,
        customSpinner: false,
      });

    case API_DATA_LOADING:
      return Object.assign({}, state, {
        isConnectedToRemote: true,
        isLoadingApi: true,
        indicatorLoading: true,
        apiError: false,
      });

    case CUSTOM_SPINNER_ENABLE:
      return Object.assign({}, state, {
        customSpinner: true,
      });
    case CUSTOM_SPINNER_DISABLE:
      return Object.assign({}, state, {
        customSpinner: false,
      });

    case ActionConstants.GET_ALL_RECIPES:
      LOG("GET_ALL_RECIPES", action);
      var result_data = action.jsonData;
      return Object.assign({}, state, {
        recipesList: result_data,
      });
    case ActionConstants.GET_USER_IMAGE:
      var result_data = action.jsonData;
      return Object.assign({}, state, {
        getUserData: result_data,
      });
    case ActionConstants.UPLOAD_USER_IMAGE:
      var result_data = action.jsonData;
      return Object.assign({}, state, {
        uploadImage: result_data,
        getUserData: result_data,
      });
    case ActionConstants.GET_USER_IMAGE_ACCOUNT:
      var result_data = action.jsonData;
      return Object.assign({}, state, {
        getUserData: result_data,
      });
    case ActionConstants.GET_CATEGORIES:
      var result_data = action.jsonData;
      return Object.assign({}, state, {
        getCategoriesList: result_data,
      });
    case ActionConstants.UPDATE_RATING:
      var result_data = action.jsonData[0];
      return Object.assign({}, state, {
        ratingData: result_data,
      });
    case ActionConstants.GET_RATING:
      var result_data = action.jsonData;
      LOG(" UPDATE_RATING UPDATE_RATING UPDATE_RATING", result_data);

      return Object.assign({}, state, {
        getRating: result_data,
        getCategoriesList: result_data,
      });
    case ActionConstants.GET_CATEGORIES2:
      var result_data = action.jsonData;
      return Object.assign({}, state, {
        getCategoriesList: result_data,
      });
    case ActionConstants.GET_ALL_REVIEW:
      var result_data = action.jsonData;
      return Object.assign({}, state, {
        getAllReviewList: result_data,
      });

    case ActionConstants.GET_SINGLE_RECIPE:
      var result_data = action.jsonData;
      return Object.assign({}, state, {
        singleRecipeData: result_data,
      });
    case ActionConstants.SAVE_FAVORITES:
      var result_data = action.jsonData;
      return Object.assign({}, state, {
        saveFavRecipe: result_data,
      });
    case ActionConstants.GET_FAV_RECIPES:
      var result_data = action.jsonData;
      return Object.assign({}, state, {
        getFavRecipes: result_data,
      });

    default:
      LOG("AUTH REDUCER DEFAULT STATE");
      return state;
  }
};

export default apiReducer;
