import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AppLogo = () => (
  <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <Image
      source={require('../../Asserts/logo.png')}
      style={{width: 150, height: 150, marginVertical: 30}}
    />
  </View>
);

export default AppLogo;
