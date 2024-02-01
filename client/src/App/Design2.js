import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../Common/colors';
import {Path, Svg} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import {Checkbox} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const Design2 = () => {
  const navigation = useNavigation();

  const onPressNextScreen = () => {
    navigation.navigate('design3');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Asserts/background2.png')}
        style={{flex: 1, width: 500}}
      />
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          top: 100,
          width: width / 1,
        }}>
        <View
          style={{
            paddingVertical: 40,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 28,
            }}>
            𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗕𝗮𝗰𝗸
          </Text>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 14,
            }}>
            Login to your account
          </Text>
          <View style={{marginVertical: 40}}>
            <LinearGradient
              colors={[colors.lightGreen, colors.white]}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              style={{
                borderRadius: 5,
                marginHorizontal: 20,
                marginVertical: 20,
                flexDirection: 'row',
                backgroundColor: colors.textColor,
                alignItems: 'center',
                borderWidth: 0.3,
                borderColor: colors.white,
              }}>
              <Entypo
                name="user"
                size={22}
                color={colors.darkGreen}
                style={{marginHorizontal: 10}}
              />
              <TextInput
                placeholder="Username"
                selectionColor={colors.lightGreen}
                underlineColorAndroid={colors.transparent}
                placeholderTextColor={colors.lightGreen}
              />
            </LinearGradient>

            <LinearGradient
              colors={[colors.lightGreen, colors.white]}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              style={{
                borderRadius: 5,
                marginHorizontal: 20,
                flexDirection: 'row',
                backgroundColor: colors.textColor,
                alignItems: 'center',
                borderWidth: 0.3,
                borderColor: colors.white,
              }}>
              <Foundation
                name="lock"
                size={25}
                color={colors.darkGreen}
                style={{marginHorizontal: 10}}
              />
              <TextInput
                placeholder="Password"
                selectionColor={colors.lightGreen}
                underlineColorAndroid={colors.transparent}
                placeholderTextColor={colors.lightGreen}
                style={{marginHorizontal: 5}}
              />
            </LinearGradient>

            <View style={styles.checkboxContainer}>
              <Checkbox.Item
                color={'#2d7216'}
                label={'Remember Me'}
                status={'checked'}
                // onPress={() => {
                //   setChecked(!checked);
                // }}
                position={'leading'}
                labelStyle={{
                  fontSize: 14,
                  color: colors.white,
                }}
              />
              <Text
                style={{
                  fontSize: 14,
                  color: colors.white,
                  textAlign: 'center',
                  marginVertical: 15,
                  marginHorizontal: 50,
                }}>
                Forgot Password?
              </Text>
            </View>
            <View style={{marginVertical: 100}}>
              <TouchableOpacity onPress={onPressNextScreen}>
                <LinearGradient
                  colors={['#2d7216', '#2d7216']}
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 1}}
                  style={{
                    borderRadius: 20,
                    marginHorizontal: 20,
                    marginVertical: 10,
                    backgroundColor: colors.darkBlue1,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      paddingVertical: 10,
                      color: colors.white,
                      fontSize: 16,
                    }}>
                    Login
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Text style={{textAlign: 'center', color: colors.white}}>
                  Don't have an account?
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color: colors.white,
                    textDecorationLine: 'underline',
                  }}>
                  Sign up
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Design2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
