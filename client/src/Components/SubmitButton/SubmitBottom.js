import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../Common/colors';

const SubmitBottom = props => {
  return (
    <TouchableOpacity
      onPress={props.handleSubmit}
      style={{
        backgroundColor: colors.orange,
        height: 50,
        justifyContent: 'center',
        marginBottom: 20,
        marginHorizontal: 15,
        borderRadius: 24,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          alignSelf: 'center',
          color: colors.black,
          fontSize: 16,
        }}>
        {props.loading ? 'Please wait....' : props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitBottom;

const styles = StyleSheet.create({});
