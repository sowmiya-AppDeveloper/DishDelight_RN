import React from 'react';
import {StatusBar, View} from 'react-native';
import {StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaView} from 'react-native-safe-area-context';
import Router from '../../Router/Router';
import {colors} from '../../Common/colors';

//Main class
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar
          animated={true}
          backgroundColor={colors.orange}
          barStyle="light-content"
        />
        <View style={{height: '100%'}}>
          <Router />
        </View>
        <FlashMessage position={'top'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
  },
});

export default App;
