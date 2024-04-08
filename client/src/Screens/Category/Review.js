import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import config from "../../../config";
import { colors } from "../../Common/colors";
import { LOG } from "../../Common/utils";

const Review = (props) => {
  const dateObject = new Date(props?.item?.updatedAt);
  const [image, setImage] = useState("");
  useEffect(() => {
    const imageData =
      props.item.userImage != "no image"
        ? `${config.API_URL}home/bi1466/sowmiya/DisDelightAssets/${props.item.userImage}`
        : "";
    LOG("imageData", imageData);

    setImage(imageData);
  }, []);
  const options = {
    month: "short", // or "short" or "numeric" as needed
    day: "numeric",
    year: "numeric",
  };

  const dateOnlyString = dateObject.toLocaleDateString(undefined, options);

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            marginVertical: 5,
            borderRadius: 25,
          }}>
          <Image
            source={{ uri: image }}
            style={{
              width: 50,
              height: 50,
              alignItems: "center",
              borderRadius: 25,
            }}
          />
        </View>
        <View style={{}}>
          <View
            style={{
              marginVertical: 5,
            }}>
            <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
              <Text
                style={{
                  color: colors.darkGreen,
                  fontSize: 16,
                }}>
                {props?.item?.name}
              </Text>
              {[1, 2, 3, 4, 5].map((star) => (
                <View
                  key={star}
                  style={{
                    alignSelf: "center",
                    paddingHorizontal: 2,
                  }}>
                  <Icon
                    name={star <= props?.item?.rating ? "star" : "star-o"}
                    size={15}
                    color={star <= props?.item?.rating ? "gold" : "gray"}
                  />
                </View>
              ))}
              <Text style={{ marginHorizontal: 10, color: colors.black }}>
                {dateOnlyString}
              </Text>
            </View>
            <Text style={{ color: colors.black, marginHorizontal: 10 }}>
              {props?.item?.reviews}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({});
