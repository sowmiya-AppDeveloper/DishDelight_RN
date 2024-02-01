import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../Common/colors';
import {getItem, removeItem} from '../Common/utils';
import {useNavigation} from '@react-navigation/native';
import {ContextProvider} from './ContextProvider';
const HeaderTabs = props => {
  const navigation = useNavigation();
  const signOut = () => {
    navigation.navigate('signIn');
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={signOut}>
        <FontAwesome5 name="sign-out-alt" size={25} color={colors.orange} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({});
