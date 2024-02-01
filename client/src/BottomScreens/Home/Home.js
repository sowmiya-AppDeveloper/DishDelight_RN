import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {colors} from '../../Common/colors';
import {LOG, getToken, requestUserPermission} from '../../Common/utils';
import {categories, routines} from '../../Components/JsonData';
import CategoryItem from '../../Screens/Category/CategoryItem';
import RecipeDescription from '../../Screens/RecipeDescription';
import RecipeListItem from './RecipeListItem';

const {width, height} = Dimensions.get('screen');

const Home = props => {
  const [image, setImage] = useState({url: '', public_id: ''});
  const userDetails = useSelector(({auth}) => auth.userDetails);
  const getUserData = useSelector(({api}) => api.getUserData);
  const recipesList = useSelector(({api}) => api.recipesList);
  const navigation = useNavigation();
  const [selectedRoutine, setSelectedRoutine] = useState('');

  useEffect(() => {
    setImage(getUserData?.image);
    const token = getToken();
    requestUserPermission();
  }, [getUserData]);

  // useEffect(() => {
  //   console.log(userDetails);

  //   insertMyRecipes();
  // }, []);
  // const insertMyRecipes = async () => {
  //   console.log('propsValue', Recipes);
  //   //////inside sweet
  //   // const {data} = await axios.post(testingUrl + 'insert-recipe', {
  //   //   categoriesRecipes: categoriesRecipes,
  //   // });
  //   //home recipes
  //   // const {data} = await axios.post(testingUrl + 'insert-recipe', {
  //   //   Recipes: Recipes,
  //   // });
  //   // const {data} = await axios.post(testingUrl + 'delete-recipes', {
  //   //   Recipes: Recipes,
  //   // });
  //   // if (data.error) {
  //   //   console.log('REQUEST DATA===>', testingUrl + 'delete-recipes');
  //   //   Alert.alert('Failure', data.error, [{text: 'OK'}]);
  //   // } else {
  //   //   ///save the response data using async storage
  //   //   console.log('RESPONSE DATA===>', data);
  //   // }
  // };
  const onPressMenu = routine => {
    setSelectedRoutine(routine);
    // navigation.navigate('routine', {screen: 'MealDay'});
  };
  const recipeListRenderItem = ({item}) => {
    let isActive = item.id == selectedRoutine;
    let activeTextColor = isActive ? colors.white : colors.textRoof;
    return (
      <View style={{alignSelf: 'center'}}>
        <TouchableOpacity
          onPress={() => onPressMenu(item.id)}
          style={[
            {
              backgroundColor: isActive ? colors.orange : colors.white,
            },
            {
              paddingVertical: 5,
              width: width / 4.5,
              borderRadius: 10,
              marginHorizontal: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 5,
            },
          ]}>
          <Image
            source={{uri: item.image}}
            style={{
              width: 50,
              height: 40,
            }}
          />
          <Text style={{color: activeTextColor ? colors.black : colors.grey}}>
            {item.routine}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const recipeDescription = ({item}) => {
    return <RecipeDescription item={item} />;
  };
  const recipeCategories = ({item}) => {
    return <CategoryItem item={item} />;
  };
  const onPressProfile = () => {
    navigation.navigate('account');
  };
  const filterData = () => {};
  const onPressChat = () => {
    navigation.navigate('chat');
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 20, paddingHorizontal: 10}}>
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginEnd: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: colors.black,
              }}>
              Hello, {userDetails.name}
            </Text>
            <TouchableOpacity
              onPress={onPressProfile}
              style={{
                width: 30,
                height: 30,
                borderRadius: 100,
              }}>
              {image?.url ? (
                <Image
                  source={{uri: image?.url}}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                  }}
                />
              ) : (
                <Image
                  source={require('../../../Asserts/logo.png')}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={onPressChat}
              style={{
                backgroundColor: colors.yellow,
                marginHorizontal: 20,
                marginVertical: 20,
                padding: 20,
              }}>
              <Text>Quick Chat</Text>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: colors.yellow,
                marginHorizontal: 20,
                marginVertical: 20,
                padding: 20,
              }}>
              <Text>Recipes</Text>
            </View>
          </View> */}
          <Text style={{color: colors.black, fontWeight: 'bold', fontSize: 26}}>
            What would you like {'\n'}to cook today?
          </Text>

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
              onPress={filterData}
              style={{
                position: 'absolute',
                top: 40, // Adjust top position as needed
                right: 15, // Adjust right position as needed
              }}
            />
          </View>
          <Text style={{fontSize: 18, color: colors.black}}>
            Recipe of the day
          </Text>
          <FlatList
            data={routines}
            renderItem={recipeListRenderItem}
            keyExtractor={item => item.id.toString()}
            listKey={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          <View>
            <Text
              style={{
                fontSize: 18,
                color: colors.black,
                paddingVertical: 10,
              }}>
              Recommendations
            </Text>
            <FlatList
              data={recipesList}
              renderItem={recipeDescription}
              keyExtractor={item => item?._id}
              listKey={item => item?._id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
            {/* <View style={styles.carouselItem}>
              <Carousel
                data={recipesList}
                renderItem={recipeDescription}
                keyExtractor={item => item._id}
                sliderWidth={350}
                itemWidth={400} // Adjusted item width
                containerCustomStyle={{
                  overflow: 'visible',
                }}
                activeSlideOffset={9}
                firstItem={1}
                inactiveSlideOpacity={3}
              />
            </View> */}
          </View>

          <Text
            style={{fontSize: 18, color: colors.black, paddingVertical: 10}}>
            categories
          </Text>
          <FlatList
            data={categories}
            renderItem={recipeCategories}
            keyExtractor={item => item.id.toString()}
            listKey={item => item.id.toString()}
            numColumns={2}
          />
        </>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  carouselItem: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    // padding: 10,
    // marginHorizontal: 10,
    // width: 200,
    // height: 200,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
