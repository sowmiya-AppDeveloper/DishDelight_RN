import { useNavigation } from "@react-navigation/native";
import React, { memo, useEffect } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../Common/colors";
import { textFontFaceSemiBold } from "../../../Common/styles";
import { getAllReview, getFavoriteRecipe } from "../../../Redux/ApiAction";
const Save = memo(() => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const getFavRecipes = useSelector(({ api }) => api.getFavRecipes);
  const userDetails = useSelector(({ auth }) => auth.userDetails);

  useEffect(() => {    dispatch(getFavoriteRecipe({ userId: userDetails._id }));

  }, []);

  const onPressViewFull = (item) => {
    navigation.navigate("routine", {
      screen: "Favorites",
      data: item,
    });
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onPressViewFull(item)}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </TouchableOpacity>
  );
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.savedHeader}>
        <TouchableOpacity
          onPress={onPressBack}
          style={{
            backgroundColor: colors.white,
            borderRadius: 15,
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
          }}>
          <AntDesign name="arrowleft" size={25} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.savedText}>Saved</Text>
      </View>
      <FlatList
        data={getFavRecipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Adjust as needed
      />
    </View>
  );
});

export default Save;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 0.8,
    borderRadius: 8,
  },
  savedHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  savedText: {
    fontSize: 20,
    color: colors.black,
    marginHorizontal: 10,
    fontFamily: textFontFaceSemiBold,
  },
});
