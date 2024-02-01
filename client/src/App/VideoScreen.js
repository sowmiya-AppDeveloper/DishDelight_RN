import React, {memo} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {LOG} from '../Common/utils';

const VideoScreen = memo(props => {
  LOG('vvvvvvvvvvvvvvvvvvvvvvvvv', props);
  const onPressTouch = v => {
    props.cart(v);
  };
  return (
    <View>
      <Text>{props.item.id}</Text>
      <TouchableOpacity
        style={{borderWidth: 1}}
        onPress={() => onPressTouch(props)}>
        <Text>Button Cart</Text>
      </TouchableOpacity>
    </View>
  );
});

export default VideoScreen;

const styles = StyleSheet.create({});
