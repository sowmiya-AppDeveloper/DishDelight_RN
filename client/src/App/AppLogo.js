import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { testingUrl } from "../Common/constant";
import { LOG } from "../Common/utils";

const AppLogo = () => (
  <View
    style={{
      justifyContent: "center",
      alignItems: "center",
    }}>
    <Image
      source={require("../../Asserts/Images/logo.png")}
      style={{
        width: 150,
        height: 150,
        marginVertical: 30,
        borderWidth: 1,
        borderRadius: 100,
      }}
    />
  </View>
);

export default AppLogo;
