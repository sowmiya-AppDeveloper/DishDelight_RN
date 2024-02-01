import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {colors} from '../Common/colors';
import {Svg, Path} from 'react-native-svg';
import {textFontFace, textFontFaceSemiBold} from '../Common/styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';

import LinearGradient from 'react-native-linear-gradient';
import {Checkbox} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const Login = () => {
  const navigation = useNavigation();
  useEffect(() => {
    console.log('initial login screen');
  }, []);

  const onPressButton = () => {
    navigation.navigate('design2');
  };

  const onPressSignUp = () => {
    navigation.navigate('signUp');
  };
  return (
    <View style={{backgroundColor: colors.baseBackground, flex: 1}}>
      <Image
        style={{
          height: '30%',
          width: '100%',
          alignSelf: 'center',
          borderBottomLeftRadius: 60,
          borderBottomRightRadius: 60,
        }}
        source={require('../../Asserts/loginBack.png')}
      />
      <View
        style={{
          paddingVertical: 40,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 28,
            fontFamily: textFontFaceSemiBold,
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
            colors={[colors.textColor, colors.white]}
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
              color={colors.blue}
              style={{marginHorizontal: 10}}
            />
            <TextInput
              placeholder="Username"
              selectionColor={colors.textColor}
              underlineColorAndroid={colors.transparent}
              placeholderTextColor={colors.blue}
            />
          </LinearGradient>

          <LinearGradient
            colors={[colors.textColor, colors.white]}
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
              color={colors.blue}
              style={{marginHorizontal: 10}}
            />
            <TextInput
              placeholder="Password"
              selectionColor={colors.textColor}
              underlineColorAndroid={colors.transparent}
              placeholderTextColor={colors.blue}
              style={{marginHorizontal: 5}}
            />
          </LinearGradient>

          <View style={styles.checkboxContainer}>
            <Checkbox.Item
              color={colors.white}
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
          <TouchableOpacity onPress={onPressButton}>
            <LinearGradient
              colors={[colors.darkBlue, colors.darkBlue1]}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              style={{
                borderRadius: 20,
                marginHorizontal: 20,
                marginVertical: 20,
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

          <TouchableOpacity onPress={onPressSignUp}>
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
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
