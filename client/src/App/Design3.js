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
import LinearGradient from 'react-native-linear-gradient';
import {Checkbox} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
const {width, height} = Dimensions.get('window');

const Design3 = () => {
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../../Asserts/background3.2.png')}
        style={{flex: 1, width: 500}}
      />
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          width: width / 1,
          backgroundColor: colors.transparentGrey,
          //   borderTopLeftRadius: 250,
        }}>
        <Image
          source={require('../../Asserts/fastFood.png')}
          style={{width: 300, height: 150, alignSelf: 'center', marginTop: 30}}
        />
        <View
          style={{
            paddingVertical: 10,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 28,
            }}>
            𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬
          </Text>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 16,
            }}>
            𝑳𝒆𝒕'𝒔 𝒇𝒊𝒏𝒅 𝒓𝒆𝒄𝒊𝒑𝒆 𝒇𝒐𝒐𝒅
          </Text>
          <View style={{marginVertical: 10}}>
            <LinearGradient
              colors={[colors.lightYellow, colors.white]}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              style={{
                borderRadius: 25,
                marginHorizontal: 20,
                marginVertical: 30,
                flexDirection: 'row',
                backgroundColor: colors.textColor,
                alignItems: 'center',
                borderWidth: 0.3,
                borderColor: colors.white,
              }}>
              <TextInput
                placeholder="Username or E-mail"
                selectionColor={colors.grey}
                underlineColorAndroid={colors.transparent}
                placeholderTextColor={colors.grey}
                style={{marginHorizontal: 20}}
              />
            </LinearGradient>

            <LinearGradient
              colors={[colors.lightYellow, colors.white]}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              style={{
                borderRadius: 25,
                marginHorizontal: 20,

                flexDirection: 'row',
                backgroundColor: colors.textColor,
                alignItems: 'center',
                borderWidth: 0.3,
                borderColor: colors.white,
              }}>
              <TextInput
                placeholder="Password"
                selectionColor={colors.grey}
                underlineColorAndroid={colors.transparent}
                placeholderTextColor={colors.grey}
                style={{marginHorizontal: 20}}
              />
            </LinearGradient>
            <TouchableOpacity>
              <LinearGradient
                colors={[colors.yellow, colors.orange]}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                style={{
                  borderRadius: 25,
                  marginHorizontal: 20,
                  marginVertical: 50,
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
                  𝗟𝗢𝗚𝗜𝗡
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.checkboxContainer}>
              <Checkbox.Item
                color={colors.orange}
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
            <View style={{marginVertical: 50}}>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Text style={{textAlign: 'center', color: colors.white}}>
                  By logging in,
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color: colors.white,
                  }}>
                  you agree to Terms of Services
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Design3;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
