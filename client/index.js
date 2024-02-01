//Default Libraries
import React, {Component, useEffect} from 'react';
import {AppRegistry} from 'react-native';

import App from './src/Screens/App/App';
import {name as appName} from './app.json';

//Plugin Libraries
import {Provider} from 'react-redux';

//User Defined Libraries
import configureStore from './src/Redux/Store';
import {
  LOG,
  notificationListener,
  onDisplayNotification,
} from './src/Common/utils';
import messaging from '@react-native-firebase/messaging';
// import  'react-native-gesture-handle';
//Global variable (scope=(This Screen)).
const store = configureStore();

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
  const notifyData = remoteMessage.data;
  onDisplayNotification(notifyData);
});

notificationListener()
  .then(res => {
    LOG('notification listener on :', res);
  })
  .catch(err => {
    LOG('notification listener failed to listen :', err);
  });

//Main Function which returns the application
const reactNativeRedux = () => {
  useEffect(() => {
    LOG('===========================');
    LOG('    WELCOME TO DEMO REDUCER   ');
    LOG('===========================');
  }, []);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

//Main Registary where we will provide our application and its name.
AppRegistry.registerComponent(appName, () => reactNativeRedux);
