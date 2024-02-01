import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../Common/colors';
import {LOG} from '../../Common/utils';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Divider} from 'react-native-elements';
import RatingDialog from '../../Components/Rating/Rating';
import {Button} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('screen');
const RoutineItem = props => {
  const getCategoriesList = useSelector(({api}) => api.getCategoriesList);
  const screenName = props.route.params.screen;
  const propsValue = props.route.params.data;
  const navigation = useNavigation();
  const [isRatingDialogVisible, setRatingDialogVisible] = useState(false);

  const [like, setLike] = useState(false);
  var finalArray = [];
  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressBookMark = item => {
    navigation.navigate('links', {data: item});
  };
  const onPressRating = () => {
    setRatingDialogVisible(true);
  };
  const onPressShare = () => {};
  const onClickDescription = item => {
    navigation.navigate('categoriesDescription', {
      screen: 'categoriesDescription',
      data: item,
    });
  };

  const categoriesRenderItem = ({item}) => {
    LOG('vvvvvvvvvvvvvvvvvvvvvvvv', item);
    return (
      <TouchableOpacity onPress={() => onClickDescription(item)}>
        <View
          style={{
            flex: 1,
            marginVertical: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
          }}>
          <Image
            source={{uri: item.image}}
            style={{height: 80, width: 70, borderRadius: 15}}
          />

          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text style={{marginHorizontal: 10}}>{item.name}</Text>
                <Text style={{marginHorizontal: 10}}>
                  Ingredients: {item.ingredients.length}
                </Text>
                <Text style={{marginHorizontal: 10}}>
                  Instructions : {item.instructions.length}
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  padding: 20,
                }}
                onPress={() => setLike(!like)}>
                <AntDesign
                  name={like ? 'heart' : 'hearto'}
                  size={20}
                  color={like ? colors.red : colors.black}
                  style={{alignSelf: 'center'}}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 5,
              }}>
              {[1, 2, 3, 4, 5].map(star => (
                <View key={star} style={{alignSelf: 'center', padding: 2}}>
                  <Icon
                    name={star <= item.rating ? 'star' : 'star-o'}
                    size={15}
                    color={star <= item.rating ? 'gold' : 'gray'}
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
        <Divider width={1} style={{marginHorizontal: 20}} />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {screenName == 'recommendation' ? (
        <View>
          <RatingDialog
            isVisible={isRatingDialogVisible}
            onClose={() => setRatingDialogVisible(false)}
            value={propsValue}
          />
          <Image source={{uri: propsValue.image}} style={styles.topImage} />
          <View style={styles.bottomView1}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={onPressBack}
                style={{
                  backgroundColor: colors.white,
                  borderRadius: 15,
                  height: 30,
                  width: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign name="arrowleft" size={25} color={colors.black} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={onPressShare}
              style={{
                backgroundColor: colors.white,
                borderRadius: 15,
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 10,
              }}>
              <Entypo name="share" size={25} color={colors.black} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPressBookMark(propsValue)}
              style={{
                backgroundColor: colors.white,
                borderRadius: 15,
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialCommunityIcons
                name="bookmark-minus-outline"
                size={25}
                color={colors.black}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomView}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 20,
                  color: colors.black,
                  marginVertical: 5,
                  fontWeight: 'bold',
                  marginTop: 10,
                  flex: 1,
                }}>
                {propsValue.title}
              </Text>
              {/* {!rating == 0 ? ( */}
              <View
                // onPress={onPressRating}
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  borderColor: colors.yellow,
                  backgroundColor: colors.lightYellow1,
                  borderRadius: 5,
                  alignSelf: 'center',
                  paddingVertical: 0.1,
                }}>
                {[1, 2, 3, 4, 5].map(star => (
                  <View key={star} style={{alignSelf: 'center', padding: 2}}>
                    {/* <Icon
                    name={star <= rating ? 'star' : 'star-o'}
                    size={15}
                    color={star <= rating ? 'gold' : 'gray'}
                  /> */}
                  </View>
                ))}
              </View>
              {/* ) : null} */}
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="clock-o"
                  size={20}
                  color={colors.orange}
                  style={{}}
                />
                <Text> 10 mins</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
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
                  flexDirection: 'row',
                  alignItems: 'center',
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
            {/* {reviewCard ? ( */}
            <View
              style={{
                // borderBottomWidth: 1,
                // borderTopWidth: 1,

                // borderColor: colors.grey,
                marginHorizontal: 20,
                backgroundColor: colors.orange,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                borderRadius: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                onPress={onPressRating}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <MaterialIcons
                  name={'message'}
                  size={20}
                  color={colors.white}
                />
                <Text
                  style={{
                    color: colors.white,
                    fontSize: 14,
                    textAlign: 'center',
                    marginHorizontal: 10,
                    fontWeight: 'bold',
                  }}>
                  ADD YOUR REVIEW
                </Text>
              </TouchableOpacity>
            </View>
            {/* // ) : null} */}
            <View style={{paddingVertical: 20}}>
              <Text style={{color: colors.black, fontSize: 16}}>
                Description
              </Text>
              <Text style={{marginTop: 5}}>{propsValue.instructions}</Text>
            </View>
            <View style={{paddingVertical: 5}}>
              <Text style={{color: colors.black, fontSize: 16}}>
                Ingredients
              </Text>
              <FlatList
                data={propsValue.ingredients}
                keyExtractor={item => item._id}
                listKey={item => item._id}
                renderItem={({item}) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 40,
                        height: 40,
                        borderWidth: 1,
                        marginVertical: 5,
                        borderRadius: 10,
                      }}>
                      <Image
                        source={require('../../../Asserts/loginBack.png')}
                        style={{
                          width: 40,
                          height: 40,
                          alignItems: 'center',
                          borderRadius: 10,
                        }}
                      />
                    </View>

                    <Text
                      style={{
                        textAlign: 'center',
                        marginHorizontal: 10,
                      }}>
                      {''}
                      {item}
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      ) : screenName == 'categories' ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <TouchableOpacity
              onPress={onPressBack}
              style={{
                backgroundColor: colors.white,
                borderRadius: 15,
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AntDesign name="arrowleft" size={25} color={colors.black} />
            </TouchableOpacity>
            <Text
              style={{
                marginHorizontal: 10,
                fontSize: 20,
                color: colors.black,
                fontWeight: 'bold',
              }}>
              {propsValue}
            </Text>
          </View>

          <View style={{position: 'relative'}}>
            <TextInput
              placeholder="🔍 Search any recipes"
              autoCapitalize="none"
              autoCorrect={false}
              cursorColor={colors.orange}
              style={{
                height: 50,
                marginVertical: 30,
                borderRadius: 30,
                padding: 15,
                backgroundColor: colors.white,
              }}
            />

            <Icon
              name="filter"
              size={24}
              color={colors.orange}
              // onPress={filterData}
              style={{
                position: 'absolute',
                top: 40, // Adjust top position as needed
                right: 15, // Adjust right position as needed
              }}
            />
          </View>

          <FlatList
            data={getCategoriesList?.filter(
              item => item.type?.toLowerCase() === propsValue?.toLowerCase(),
            )}
            keyExtractor={item => item._id}
            listKey={item => item._id}
            renderItem={categoriesRenderItem}
          />
        </>
      ) : null}
    </ScrollView>
  );
};

export default RoutineItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImage: {
    width: width,
    height: height / 1.8,
    resizeMode: 'cover',
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
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
  },
});
