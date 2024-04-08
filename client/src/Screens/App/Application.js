import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useDispatch } from "react-redux";
import { LOG, getItem } from "../../Common/utils";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../Common/colors";
import { ProgressBar } from "react-native-paper";
import { signIn } from "../../Redux/AuthAction";
import { getSingleRecipeRequest, initSpinner } from "../../Redux/ApiAction";

const win = Dimensions.get("window");

const Application = (props) => {
  const Dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    appWithoutBackground();
  }, []);

  const appWithoutBackground = async () => {
    const clickedUrl = await Linking.getInitialURL();

    const containId = clickedUrl.includes("id");
    const containType = clickedUrl.includes("type");

    if (containId && containType) {
      var regex = /[?&]([^=#]+)=([^&#]*)/g,
        params = {},
        match;
      while ((match = regex.exec(clickedUrl))) {
        params[match[1]] = match[2];
      }
      LOG("after items splitted :", params);
      let jsonData = {
        recipeId: params.id,
      };

      Dispatch(getSingleRecipeRequest(jsonData));
    }
  };
  // UseEffect hook will work only at initial render
  useEffect(() => {
    if (Platform.OS === "android") {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      ])
        .then((result) => {
          if (
            result["android.permission.CAMERA"] &&
            result["android.permission.READ_EXTERNAL_STORAGE"] &&
            result["android.permission.WRITE_EXTERNAL_STORAGE"] &&
            result["android.permission.POST_NOTIFICATIONS"] === "granted"
          ) {
            LOG("Permissions_granted");
            // this.setState({
            //   permissionsGranted: true,
            // });
          } else if (
            result["android.permission.CAMERA"] ||
            result["android.permission.READ_EXTERNAL_STORAGE"] ||
            result["android.permission.WRITE_EXTERNAL_STORAGE"] ||
            result["android.permission.POST_NOTIFICATIONS"] ===
              "never_ask_again"
          ) {
            LOG("Permissions_denied");
            // BackHandler.exitApp();
          } else {
            LOG("PERMISSION ELSE CASE HANDLE HERE");
          }
        })
        .catch((err) => {
          LOG("permission granted in catch :", err);
        });
    }
    // hardware back button handler

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButtonClick
    );

    ////////////////////////////////////////////////////

    getItem("userDetails")
      .then((userDetails) => {
        if (userDetails) {
          LOG(
            "------------userDetails Found Auto Login--------- : " + userDetails
          );

          LOG("userDetails Found Auto Login : " + userDetails);
          var cred = JSON.parse(userDetails);

          Dispatch(signIn(cred, false));
          // Dispatch(initSpinner());
        } else {
          LOG("No userDetails FoundMAYBE");
          setTimeout(() => {
            navigation.navigate("signIn");
          }, 2000);
        }
      })
      .catch((err) => {
        LOG("while getting userDetails in catch : ", err);
      });

    return () => backHandler.remove();
  }, []);

  const handleBackButtonClick = () => {
    //var routeName = Actions.currentScene;
    // LOG('BACK pressed ON : ' + routeName);
    //backPressHandler(routeName);
    return true;
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../Asserts/Images/background3.2.png")}
        style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text
            style={{
              color: colors.white,
              fontSize: 40,
              fontWeight: "bold",
              marginHorizontal: 20,
              marginVertical: 50,
              textAlign: "center",
            }}>
            𝑳𝒆𝒕'𝒔 𝒇𝒊𝒏𝒅 𝒇𝒐𝒐𝒅 𝒓𝒆𝒄𝒊𝒑𝒆
          </Text>

          <ProgressBar
            visible={true}
            style={styles.progressbarStyle}
            progress={0.7}
            indeterminate={true}
            color={colors.orange}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.white,
  },
  progressbarStyle: {
    marginHorizontal: 40,
    marginVertical: 80,
  },
  logo: {
    width: win.width - 20,
    height: 200,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  headerText: {
    textAlign: "center",
    //fontFamily: textFontFaceMedium,
    color: colors.white,
    fontSize: 35,
    marginTop: 50,
    marginHorizontal: 50,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "space-between",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Application;
