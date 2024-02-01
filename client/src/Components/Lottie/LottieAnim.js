import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const LottieAnim = () => {
  return (
    <LottieView
      source={require('../../../Asserts/sad.json')} // Replace with the actual path to your Lottie JSON file
      autoPlay
      loop
      style={{width: 100, height: 100}} // Set the desired width and height
    />
  );
};

export default LottieAnim;

const styles = StyleSheet.create({});
