import SignIn from "../App/SignIn";
import {
  API_DATA_ERROR,
  API_DATA_RECEIVED,
  ActionConstants,
  GET_API_DATA,
  HTTP,
  RECEIVED_API_DATA,
} from "../Common/constant";
import { LOG, Toast, getItem, storeItem } from "../Common/utils";
import * as RootNavigation from "../Common/RootNavigation";
import { Alert } from "react-native";
import {
  getAllRecipesList,
  getAllReview,
  getCategories,
  getCategories2,
  getFavoriteRecipe,
  getFavoriteRes,
  getProductRating,
  getRecommendationRating,
  getUserImage,
  getUserImageInsideAccount,
  stopSpinner,
} from "./ApiAction";
import { signIn } from "./AuthAction";

const axios = require("axios").default;

// Api middleware for Fetching User Details
export const apiMiddleware = (store) => (next) => (action) => {
  LOG("<<<<== Api MIDDLEWARE ==>>>>");

  switch (action.type) {
    // Every Api call in the Application must be done here.
    case GET_API_DATA:
      var header = {};

      // Header Without Authentication pass noAuth in action, multipart for multipart
      if (action.noAuth) {
        header = HTTP.HEADERS;
      } else {
        if (action.multiPart) {
          header = HTTP.FormDataHeader;
        } else {
          header = HTTP.AuthHeader;
        }
      }

      var method = "post";

      if (action.get) {
        method = "get";
      }

      var config = {
        method: method,
        url: action.requestUrl.trim(),
        data: action.multiPart
          ? action.jsonData
          : JSON.stringify(action.jsonData),
        headers: header,
      };

      LOG("request Type ==> " + action.requestType);
      LOG("Request Config =====>: " + JSON.stringify(config));

      // Axios is used in this application to make api calls
      axios(config, { timeout: 2 })
        .then((response) => {
          LOG("Status Code :" + response);
          LOG("Status Code :" + typeof response.status);
          return Promise.all([response.data, response.status]);
        })
        .then((responseData, status) => {
          LOG("---------------->Response Data<----------------------");
          LOG("request Type ==>" + action.requestType);
          LOG("Response Data >>:" + JSON.stringify(responseData));

          next({
            type: API_DATA_RECEIVED,
            responseData: responseData[0],
            statusCode: status,
            requestType: action.requestType,
            requestData: action.jsonData,
            stopSpinner: action.stopSpinner,
            extraData: action.extraData,
          });
        })
        .catch((error) => {
          LOG("ERROR DATA>>:" + JSON.stringify(error));

          if (error.response.status == 401) {
            store.dispatch({
              type: API_DATA_RECEIVED,
              responseData: error,
              requestData: action.jsonData,
              requestType: action.requestType,
              statusCode: error.response.status,
              extraData: action.extraData,
            });
          } else {
            store.dispatch({
              type: API_DATA_ERROR,
              jsonData: error,
              requestData: action.jsonData,
              requestType: action.requestType,
              extraData: action.extraData,
            });
          }
        });

      break;

    default:
      LOG("Default API MIDDLEWARE");
      break;
  }
  next(action);
};

// Application Middleware is for handling response received from received api data
export const ApplicationMiddleware = (store) => (next) => (action) => {
  LOG("FETCH PROCESS MIDDLEWARE");

  switch (action.type) {
    case API_DATA_RECEIVED:
      LOG("API DATA RECEIVED" + JSON.stringify(action.responseData));

      if (action.statusCode == 401) {
        LOG("Authentication Error");

        getItem("userDetails").then((userDetails) => {
          if (userDetails) {
            LOG(
              "------------userDetails Found Auto Login--------- : " +
                userDetails
            );

            var cred = JSON.parse(userDetails);
            LOG("userDetails Found Auto Login2222222222 : ", cred);
            store.dispatch(signIn(cred));
          } else {
            RootNavigation.reset({
              index: 0,
              routes: [{ name: "signIn" }],
            });
          }
        });

        LOG("Authentication Error Completed");
      } else {
        var dispatchSpinner = true; // For stopping dispatch customly
        var dispatchNext = false;
        //To disable the loading indicator
        store.dispatch({ type: RECEIVED_API_DATA });
        LOG("Redirection RT == > :" + action.requestType);

        switch (action.requestType) {
          case ActionConstants.SIGN_IN:
            if (action.responseData.error == "Wrong password") {
              store.dispatch(stopSpinner());
              Alert.alert("Failed", "Incorrect Password", [
                {
                  text: "OK",
                },
              ]);
            } else if (action.responseData.error == "No user found") {
              Alert.alert("Failed", "No user found", [
                {
                  text: "OK",
                  onPress: () => {
                    RootNavigation.reset({
                      index: 0,
                      routes: [
                        {
                          name: "signIn",
                        },
                      ],
                    });
                  },
                },
              ]);
              dispatchNext = true;
            } else {
              LOG("LoginStatusSuccess :", action.responseData);
              var result = action.responseData;
              LOG("result", result);
              storeItem("userDetails", JSON.stringify(action.requestData));
              HTTP.AuthHeader.Authorization = "Bearer " + result.token;
              HTTP.FormDataHeader.Authorization = "Bearer " + result.token;
              LOG("userDetailsData", HTTP.AuthHeader.Authorization);

              store.dispatch(getAllRecipesList({}));
              dispatchNext = true;
            }
            break;

          case ActionConstants.SIGN_UP:
            if (action.responseData.error == "Email is taken") {
              Alert.alert("Failed", "Email is already taken", [
                {
                  text: "OK",
                },
              ]);
            } else if (action.responseData.error == "Name is required") {
              Alert.alert("Failed", "Name is required", [
                {
                  text: "OK",
                },
              ]);
            } else if (action.responseData.error == "Email is required") {
              Alert.alert("Failed", "Email is required", [
                {
                  text: "OK",
                },
              ]);
            } else if (
              action.responseData.error ==
              "Password is required and should be 6 characters long"
            ) {
              Alert.alert(
                "Failed",
                "Password is required and should be 6 characters long",
                [
                  {
                    text: "OK",
                  },
                ]
              );
            } else {
              if (action.responseData.status == "success") {
                Alert.alert("Success", "👍 Signup successfully", [
                  {
                    text: "OK",
                    onPress: () => {
                      RootNavigation.reset({
                        index: 0,
                        routes: [
                          {
                            name: "signIn",
                          },
                        ],
                      });
                    },
                  },
                ]);
              }
              dispatchNext = true;
            }
            break;

          case ActionConstants.FORGOT_PASSWORD:
            if (action.responseData.status == "success") {
              Alert.alert(
                "Success",
                "Enter the password reset code we sent in your email 📪",
                [
                  {
                    text: "OK",
                  },
                ]
              );

              dispatchNext = true;
            }
            break;

          case ActionConstants.RESET_PASSWORD:
            if (action.responseData.status == "success") {
              Alert.alert(
                "Success",
                "Now you can login with your new password",
                [
                  {
                    text: "OK",
                    onPress: () => {
                      RootNavigation.reset({
                        index: 0,
                        routes: [{ name: "signIn" }],
                      });
                    },
                  },
                ]
              );
              dispatchNext = true;
            }
            break;
          case ActionConstants.GET_ALL_RECIPES:
            if (action.responseData.status == "success") {
              store.dispatch(getCategories({}));

              dispatchNext = true;
            }
            break;
          case ActionConstants.GET_CATEGORIES:
            var userDetails = store.getState().auth.userDetails;

            if (action.responseData.status == "success") {
              var jsonData = {
                id: userDetails._id,
              };
              store.dispatch(getUserImage(jsonData));

              dispatchNext = true;
            }
            break;
          case ActionConstants.GET_USER_IMAGE:
            if (action.responseData.status == "success") {
              RootNavigation.reset({
                index: 0,
                routes: [
                  {
                    name: "home",
                  },
                ],
              });
              dispatchNext = true;
            }
            break;

          case ActionConstants.UPLOAD_USER_IMAGE:
            var userDetails = store.getState().auth.userDetails;

            if (action.responseData.status == "success") {
              var jsonData = {
                id: userDetails._id,
              };
              store.dispatch(getUserImageInsideAccount(jsonData));

              dispatchNext = true;
            }
            break;
          case ActionConstants.GET_USER_IMAGE_ACCOUNT:
            if (action.responseData.status == "success") {
              Alert.alert("success", "👍 Image added Successfully");
            }
            dispatchNext = true;
            break;
          case ActionConstants.UPDATE_RATING:
            if (action.responseData.status == "success") {
              store.dispatch(
                getAllReview(
                  {
                    productId: action.responseData.data[0].productId,
                  },
                  { extraData: action.extraData.extraData }
                )
              );

              dispatchNext = true;
            }
            break;
          case ActionConstants.GET_ALL_REVIEW:
            if (action.responseData.status == "success") {
              if (action.extraData.extraData == "categories") {
                store.dispatch(getProductRating({}));
              } else {
                store.dispatch(getRecommendationRating({}));
              }

              dispatchNext = true;
            }
            break;

          case ActionConstants.GET_SINGLE_RECIPE:
            if (action.responseData.status == "success") {
              LOG("GET_SINGLE_RECIPE", action.responseData.data);
              RootNavigation.navigateScreen("categoriesDescription", {
                screen: "categoriesDescription",
                data: action.responseData.data,
              });
            }
            dispatchNext = true;
            break;
          case ActionConstants.SAVE_FAVORITES:
            if (action.responseData.status == "success") {
              store.dispatch(getFavoriteRecipe({}));
              Toast("Recipe Added SuccessFully");
            }
            dispatchNext = true;
            break;

          default:
            LOG("Redirection : Default ");
            dispatchNext = true;
            break;
        }

        if (action.stopSpinner && dispatchSpinner) {
          store.dispatch(stopSpinner());
        }
        if (dispatchNext) {
          store.dispatch({
            type: action.requestType,
            jsonData: action.responseData.data,
            requestData: action.requestData,
            extraData: action.extraData,
          });
        }
      }
      break;

    default:
      LOG("Default APPLICATION MIDDLEWARE");
      next(action);
      break;
  }
};
