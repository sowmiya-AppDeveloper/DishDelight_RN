import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../Common/colors';

const UserInput = props => {
  return (
    <View style={{marginHorizontal: 24}}>
      <Text style={{color: colors.black}}>{props.name}</Text>
      <TextInput
        style={{
          borderBottomWidth: 0.5,
          height: 48,
          borderBottomColor: '#8e93a1',
          marginBottom: 30,
        }}
        value={props.value}
        onChangeText={text => props.setValue(text)}
      />
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({});
