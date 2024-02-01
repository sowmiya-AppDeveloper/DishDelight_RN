import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../Common/colors';
import {Image} from 'react-native';
import {LOG} from '../../Common/utils';
import {routines} from '../../Components/JsonData';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

const RecipeListItem = props => {
  const [selectedRoutine, setSelectedRoutine] = useState('');
  const navigation = useNavigation();
  let isActive;
  return (
    <View style={{alignSelf: 'center'}}>
      <TouchableOpacity
        onPress={() => onPressMenu(props.item.routine)}
        style={[
          {
            backgroundColor: selectedRoutine ? colors.red : colors.black,
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
          source={{uri: props.item.image}}
          style={{
            width: 50,
            height: 40,
          }}
        />
        <Text style={{color: colors.grey}}>{props.item.routine}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecipeListItem;

const styles = StyleSheet.create({});
