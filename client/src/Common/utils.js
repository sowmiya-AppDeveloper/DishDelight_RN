import AsyncStorage from "@react-native-async-storage/async-storage";
import { isTesting, testingUrl } from "./constant";
import axios from "axios";
import { categoriesRecipes } from "../Components/JsonData";
import messaging from "@react-native-firebase/messaging";
import notifee from "@notifee/react-native";
import { Alert, Platform, ToastAndroid } from "react-native";
const logger = (string, value) => {
  if (value) {
    console.log(string, value);
  } else {
    console.log(string);
  }
};

export const LOG = isTesting ? logger : () => {};

export const getItem = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    // error reading value
    LOG("ERROR " + JSON.stringify(e));
    return null;
  }
};
export const storeItem = async (key, value) => {
  try {
    // LOG("STORING Key : " + key + " Value : " + value);
    return await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
    LOG("ERROR " + JSON.stringify(e));
    return null;
  }
};

// asynstorage Remove item
export const removeItem = async (key) => {
  try {
    LOG("Removing Key : " + key);
    return await AsyncStorage.removeItem(key);
  } catch (e) {
    // saving error
    LOG("ERROR " + JSON.stringify(e));
    return null;
  }
};

export const Toast = (value, length) => {
  if (Platform.OS === "android") {
    if (length) {
      ToastAndroid.showWithGravity(
        value,
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    } else {
      ToastAndroid.showWithGravity(
        value,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  } else if (Platform.OS === "ios") {
    Alert.alert("Dish Delight", value, [
      { text: "OK", onPress: () => console.log("") },
    ]);
  }
};

const insertMyRecipes = async () => {
  console.log("propsValue", categoriesRecipes);
  const { data } = await axios.post(testingUrl + "insert-recipe", {
    categoriesRecipes: categoriesRecipes,
  });
  // const {data} = await axios.post(testingUrl + 'delete-recipes', {
  //   Recipes: Recipes,
  // });
  if (data.error) {
    // console.log('REQUEST DATA===>', testingUrl + 'delete-recipes');
    Alert.alert("Failure", data.error, [{ text: "OK" }]);
  } else {
    ///save the response data using async storage
    console.log("RESPONSE DATA===>", data);
  }
};
export const getToken = async () => {
  await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  console.log("Token values ====================> ", token);
  return token;
};

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization status:", authStatus);
  }
};
//For push notification
//Handling navigation by notification clicks
export const notificationListener = async () => {
  await messaging().onNotificationOpenedApp((msg) => {
    console.log("Notification caused app to open from background state:", msg);
  });

  // Check whether an initial notification is available

  let isNotify;
  const notifyData = await messaging()
    .getInitialNotification()
    .then((msg) => {
      if (msg) {
        console.log("Notification caused app to open from quit state:", msg);
        isNotify = msg;
      }
    })
    .catch((err) => {
      LOG("error occurred while getting app open :", err);
    })
    .finally((fin) => {
      LOG("notify function don that work :", isNotify);
      if (isNotify) {
        LOG("notification contains values");
      } else {
        LOG("notification contains nothing");
      }
    });
};
export const onDisplayNotification = async (data) => {
  // Request permissions (required for iOS)

  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: "default",
    name: "Default Channel",
  });

  // Display a notification
  await notifee
    .displayNotification({
      title: data.TITLE,
      body: data.MESSAGE,
      android: {
        channelId,
        smallIcon: "ic_launcher",
        pressAction: {
          id: "default",
        },
      },
    })
    .then((res) => {
      LOG("Notification shown successfully", res);
    })
    .catch((err) => {
      LOG("error occurred while showing the notification :", err);
    });
};
