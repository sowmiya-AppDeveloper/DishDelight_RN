import {
  ActionConstants,
  CUSTOM_SPINNER_DISABLE,
  CUSTOM_SPINNER_ENABLE,
  GET_API_DATA,
  HTTP,
} from '../Common/constant';
import {LOG} from '../Common/utils';

export const initSpinner = () => {
  return dispatch => {
    dispatch({
      type: CUSTOM_SPINNER_ENABLE,
    });
  };
};

export const stopSpinner = () => {
  return dispatch => {
    dispatch({
      type: CUSTOM_SPINNER_DISABLE,
    });
  };
};

export const getAllRecipesList = jsonData => {
  return dispatch => {
    dispatch({
      type: GET_API_DATA,
      jsonData: jsonData,
      requestUrl: HTTP.getAllRecipes,
      requestType: ActionConstants.GET_ALL_RECIPES,
    });
  };
};

export const getUserImage = jsonData => {
  return dispatch => {
    dispatch({
      type: GET_API_DATA,
      jsonData: jsonData,
      requestUrl: HTTP.getUserImage,
      requestType: ActionConstants.GET_USER_IMAGE,
    });
  };
};
export const uploadUserImage = jsonData => {
  LOG('uploadUserImage', jsonData);
  return dispatch => {
    dispatch({
      type: GET_API_DATA,
      jsonData: jsonData,
      requestUrl: HTTP.uploadUserImage,
      requestType: ActionConstants.UPLOAD_USER_IMAGE,
      // multiPart: true,
    });
  };
};
export const getCategories = jsonData => {
  return dispatch => {
    dispatch({
      type: GET_API_DATA,
      jsonData: jsonData,
      requestUrl: HTTP.getCategories,
      requestType: ActionConstants.GET_CATEGORIES,
    });
  };
};
export const getCategories2 = jsonData => {
  return dispatch => {
    dispatch({
      type: GET_API_DATA,
      jsonData: jsonData,
      requestUrl: HTTP.getCategories,
      requestType: ActionConstants.GET_CATEGORIES2,
    });
  };
};
export const productRating = (jsonData, extraData) => {
  return dispatch => {
    dispatch({
      type: GET_API_DATA,
      jsonData: jsonData,
      requestUrl: HTTP.productRating,
      requestType: ActionConstants.PRODUCT_RATING,
      extraData: extraData,
    });
  };
};
export const getProductRating = jsonData => {
  return dispatch => {
    dispatch({
      type: GET_API_DATA,
      jsonData: jsonData,
      requestUrl: HTTP.getRatings,
      requestType: ActionConstants.GET_RATING,
    });
  };
};
export const getAllReview = (jsonData, extraData) => {
  return dispatch => {
    dispatch({
      type: GET_API_DATA,
      jsonData: jsonData,
      requestUrl: HTTP.getAllReview,
      requestType: ActionConstants.GET_ALL_REVIEW,
      extraData: extraData,
    });
  };
};
export const getRecommendationRating = jsonData => {
  return dispatch => {
    dispatch({
      type: GET_API_DATA,
      jsonData: jsonData,
      requestUrl: HTTP.getRecommendationRating,
      requestType: ActionConstants.RECOMMENDATION_RATING,
    });
  };
};
export const getSingleRecipeRequest = jsonData => {
  return dispatch => {
    dispatch({
      type: GET_API_DATA,
      jsonData: jsonData,
      requestUrl: HTTP.getSingleRecipe,
      requestType: ActionConstants.GET_SINGLE_RECIPE,
    });
  };
};
