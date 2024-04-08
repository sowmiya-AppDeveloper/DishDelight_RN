import {
  Animated,
  Dimensions,
  ImageBackground,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { colors } from "../../Common/colors";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { textFontFace, textFontFaceMedium } from "../../Common/styles";
const { width, height } = Dimensions.get("screen");
const RecipeDescription = (props) => {
  const navigation = useNavigation();
  const onPressMenu = () => {
    navigation.navigate("routine", {
      screen: "recommendation",
      data: props.item,
    });
  };
  return (
    <TouchableOpacity onPress={onPressMenu}>
      <View
        style={{
          marginHorizontal: 10,
          // width: width / 2,
          alignItems: "center",
          // backgroundColor: colors.blue,
          paddingVertical: 5,
          // borderWidth: 1,
          // borderColor: colors.red,
        }}>
        <View style={{ width: 150, height: 200, borderRadius: 20 }}>
          <Image
            source={{ uri: props.item.image }}
            style={{
              width: 150,
              height: 200,
              borderRadius: 20,
            }}></Image>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end", // Align content to the bottom
              alignItems: "flex-start", // Align content to the left
              padding: 10, // Add padding to create some spacing from the bottom and left edges
            }}>
            <Text style={{}}>{props.item.rating}</Text>
          </View>
        </View>

        <View style={{ width: width / 3 }}>
          <Text
            style={{
              marginTop: 20,
              textAlign: "center",
              fontFamily: textFontFace,
            }}>
            {props.item.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeDescription;

const styles = StyleSheet.create({});
