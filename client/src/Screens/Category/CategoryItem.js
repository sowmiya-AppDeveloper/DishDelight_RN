import {
  Alert,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {colors} from '../../Common/colors';
import {useNavigation} from '@react-navigation/native';
import {categoriesRecipes} from '../../Components/JsonData';
import {testingUrl} from '../../Common/constant';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {LOG} from '../../Common/utils';

const {width, height} = Dimensions.get('screen');
const CategoryItem = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getCategoriesList = useSelector(({api}) => api.getCategoriesList);
  const [productData, setProductData] = useState([]);
  var finalArray = [];

  const onPressCategories = itemData => {
    navigation.navigate('routine', {
      screen: 'categories',
      data: itemData,
    });
  };
  return (
    <TouchableOpacity
      style={{flex: 1}}
      onPress={() => onPressCategories(props.item.routine)}>
      <View
        style={{
          alignItems: 'center',
          marginVertical: 10,
          flex: 1,
          justifyContent: 'space-around',
        }}>
        <ImageBackground
          source={{uri: props.item.image}}
          style={[styles.backgroundImage]}>
          <View style={styles.overlay}>
            <Text
              style={{
                color: colors.white,
                fontSize: 16,
                fontWeight: 'bold',
                marginHorizontal: 20,
                marginVertical: 90,
                textAlign: 'center',
              }}>
              {props.item.routine}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    //backgroundColor: colors.white,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'space-between',
    borderRadius: 20,
    alignItems: 'center',
  },
  backgroundImage: {
    width: 150,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 5,
  },
});
