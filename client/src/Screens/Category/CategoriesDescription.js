import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import RatingDialog from "../../Components/Rating/Rating";
import { Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../Common/colors";
import { useDispatch, useSelector } from "react-redux";
import { getAllReview, saveFavorites } from "../../Redux/ApiAction";
import Review from "./Review";
import { LOG } from "../../Common/utils";
import { Linking } from "react-native";
import { testingUrl } from "../../Common/constant";
const { width, height } = Dimensions.get("screen");
import Share from "react-native-share";

const CategoriesDescription = (props) => {
  const propsValue = props.route.params.data;
  const [isExpanded, setIsExpanded] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewCard, setReviewCard] = useState(true);
  const [favorites, setFavorites] = useState(false);

  const userDetails = useSelector(({ auth }) => auth.userDetails);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getAllReviewList = useSelector(({ api }) => api.getAllReviewList);
  const getFavRecipes = useSelector(({ api }) => api.getFavRecipes);
  const screenName = props?.route?.params?.screen;

  const [isRatingDialogVisible, setRatingDialogVisible] = useState(false);
  const onPressBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    dispatch(
      getAllReview({ productId: propsValue?.id }, { extraData: "categories" })
    );
  }, []);
  useEffect(() => {
    getFavRecipes.filter((x) => {
      if (x.id == propsValue?.id) {
        setFavorites(true);
      }
    });
  }, [getFavRecipes]);

  useEffect(() => {
    if (getAllReviewList?.length === 0) {
      setReviewCard(true);
    } else {
      getAllReviewList?.filter((data) => {
        if (userDetails?._id == data.userId) {
          setReviewCard(false);
        } else {
          setReviewCard(true);
        }
      });
    }
  }, [getAllReviewList]);
  useEffect(() => {
    getAllReviewList?.filter((item) => {
      if (item.productId === propsValue?.id) {
        setRating(item.rating);
      }
    });
  }, [getAllReviewList]);

  const onPressShare = async (item) => {
    LOG("onPressBookMark", item);

    const token = Math.random() * 100;
    const recipeId = item.id;
    const recipeType = item.type;
    const url = "https://artest.recipes.com/";

    const generateLink = `?id=${recipeId}&type=${recipeType}&token=${token}`;
    await Share.open({
      url: `${url}/${generateLink}`,
      message: "Recipe you like to share",
      title: "Demo title",
    }).catch((err) => {
      LOG("error", err);
    });
  };
  const onPressBookMark = (item) => {
    if (favorites) {
      LOG("Remove From Favorites");
    } else {
      let jsonData = {
        recipeId: item._id,
        status: "categories",
        userId: userDetails._id,
      };
      dispatch(saveFavorites(jsonData));
    }
  };
  const renderReviews = ({ item }) => {
    return <Review item={item} />;
  };
  const onPressRating = () => {
    setRatingDialogVisible(true);
  };
  return (
    <ScrollView>
      <RatingDialog
        isVisible={isRatingDialogVisible}
        onClose={() => setRatingDialogVisible(false)}
        value={propsValue}
        screenName={"categories"}
      />

      <Image source={{ uri: propsValue.image }} style={styles.topImage} />
      <View style={styles.bottomView1}>
        <View style={{ flex: 1 }}>
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
        </View>

        <TouchableOpacity
          onPress={() => onPressShare(propsValue)}
          style={{
            backgroundColor: colors.white,
            borderRadius: 15,
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 10,
          }}>
          <Entypo name="share" size={25} color={colors.grey} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressBookMark(propsValue)}
          style={{
            backgroundColor: colors.white,
            borderRadius: 15,
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
          }}>
          <AntDesign
            name={favorites ? "heart" : "hearto"}
            size={25}
            color={favorites ? colors.red : colors.black}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomView}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 20,
              color: colors.black,
              marginVertical: 5,
              fontWeight: "bold",
              marginTop: 10,
              flex: 1,
            }}>
            {propsValue.name}
          </Text>
          {!rating == 0 ? (
            <>
              <View
                // onPress={onPressRating}
                style={{
                  flexDirection: "row",
                  borderWidth: 1,
                  borderColor: colors.yellow,
                  backgroundColor: colors.lightYellow1,
                  borderRadius: 5,
                  alignSelf: "center",
                  paddingVertical: 0.1,
                }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <View key={star} style={{ alignSelf: "center", padding: 2 }}>
                    <Icon
                      name={star <= rating ? "star" : "star-o"}
                      size={15}
                      color={star <= rating ? "gold" : "gray"}
                    />
                  </View>
                ))}
              </View>
            </>
          ) : null}
        </View>

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}>
            <Icon name="clock-o" size={20} color={colors.orange} style={{}} />
            <Text> 10 mins</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 10,
            }}>
            <Entypo
              name="bar-graph"
              size={20}
              color={colors.orange}
              style={{}}
            />
            <Text> medium</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 10,
            }}>
            <FontAwesome5
              name="fire"
              size={20}
              color={colors.orange}
              style={{}}
            />
            <Text> 156 cal</Text>
          </View>
        </View>
        {reviewCard ? (
          <View
            style={{
              // borderBottomWidth: 1,
              // borderTopWidth: 1,

              // borderColor: colors.grey,
              marginHorizontal: 20,
              backgroundColor: colors.orange,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              borderRadius: 10,
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={onPressRating}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignSelf: "center",
                alignItems: "center",
              }}>
              <MaterialIcons name={"message"} size={20} color={colors.white} />
              <Text
                style={{
                  color: colors.white,
                  fontSize: 14,
                  textAlign: "center",
                  marginHorizontal: 10,
                  fontWeight: "bold",
                }}>
                ADD YOUR REVIEW
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <View style={{ paddingVertical: 20 }}>
          <Text style={{ color: colors.black, fontSize: 16 }}>Description</Text>
          <Text
            style={{ marginTop: 5 }}
            numberOfLines={isExpanded ? undefined : 3}>
            {propsValue.instructions}
          </Text>
          <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
            <Text style={{ color: colors.blue }}>
              {isExpanded ? "Show Less" : "Show More"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 5 }}>
          <Text style={{ color: colors.black, fontSize: 16 }}>Ingredients</Text>

          <FlatList
            data={propsValue.ingredients}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 40,
                    height: 40,
                    //borderWidth: 1,
                    marginVertical: 5,
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require("../../../Asserts/Images/servingDish.png")}
                    style={{
                      width: 30,
                      height: 30,
                      alignItems: "center",
                      //borderRadius: 10,
                    }}
                  />
                </View>

                <Text
                  style={{
                    // textAlign: 'center',
                    marginHorizontal: 10,
                    width: width / 1.5,
                  }}>
                  {item}
                </Text>
              </View>
            )}
          />
          <View style={{ marginVertical: 20 }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: colors.black }}>
              Ratings & Reviews
            </Text>

            <FlatList
              data={getAllReviewList}
              renderItem={renderReviews}
              keyExtractor={(item) => item?.id}
              ListEmptyComponent={
                <Text style={{ textAlign: "center", paddingVertical: 20 }}>
                  {"No reviews found"}
                </Text>
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CategoriesDescription;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImage: {
    width: width,
    height: height / 1.8,
    resizeMode: "cover",
  },
  bottomView: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    marginTop: -20,
    padding: 20,
  },
  bottomView1: {
    paddingHorizontal: 20,
    flexDirection: "row",
    position: "absolute",
    top: 10,
  },
});
// function shouldShowRatingButton(lastRatingDate) {
//   const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
//   const currentDate = new Date();
//   const timeDifference = currentDate - lastRatingDate;
//   return timeDifference >= oneWeekInMilliseconds;
// }
// const lastRatingDate = new Date('2023-09-19');
