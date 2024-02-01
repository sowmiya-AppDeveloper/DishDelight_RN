import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Context = createContext();

const ContextProvider = ({props}) => {
  const [state, setState] = useState({
    user: null,
    token: '',
  });

  useEffect(() => {
    const getStoredDataFrmAsync = async () => {
      let data = await AsyncStorage.getItem('userDetails');
      const as = JSON.parse(data);
      setState({...state, user: as.user, token: as.token});
    };
    getStoredDataFrmAsync();
  }, []);
  return <Context.Provider value={[state, setState]}>{props}</Context.Provider>;
};

export {Context, ContextProvider};
