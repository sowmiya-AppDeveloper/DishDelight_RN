import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {useDispatch} from 'react-redux';
import {colors} from '../Common/colors';
import UserInput from '../Components/Input/UserInput';
import SubmitBottom from '../Components/SubmitButton/SubmitBottom';
import {signIn} from '../Redux/AuthAction';
import AppLogo from './AppLogo';

const SignIn = props => {
  const navigation = useNavigation();
  const Dispatch = useDispatch();
  const [email, setEmail] = useState('joteyi7760@twugg.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !password) {
      Alert.alert('Alert', 'All inputs are required ', [
        {
          text: 'Ok',
        },
      ]);
      console.log('please enter here');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      // Dispatch(initSpinner());
      var userDetails = {
        email,
        password,
      };

      Dispatch(signIn(userDetails));
      setLoading(false);

      console.log('singInRequest ==>', userDetails);
      // const data = await axios.post(testingUrl + 'signin', {
      //   email,
      //   password,
      // });
      // if (data.data.error) {
      //   setLoading(false);
      //   Alert.alert('Failure', data.data.error, [{text: 'OK'}]);
      //   if (data.data.error == 'No user found') {
      //     setEmail('');
      //     setPassword('');
      //   }
      // } else {
      //   await AsyncStorage.setItem('userDetails', JSON.stringify(data.data));
      //   setLoading(false);

      //   Alert.alert('Success', 'SignIn successfully', [
      //     {
      //       text: 'OK',
      //       onPress: () => {
      //         navigation.navigate(
      //           'home',

      //           {
      //             data: data.data,
      //           },
      //         );
      //       },
      //     },
      //   ]);
      // }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onPressSignUp = () => {
    navigation.navigate('signUp');
  };

  const onPressForgot = () => {
    navigation.navigate('forgot');
  };
  return (
    <KeyboardAvoidingScrollView
      contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
      <View style={{marginVertical: 100}}>
        <AppLogo />
        <Text
          style={{
            fontSize: 24,
            color: colors.black,
            alignSelf: 'center',
          }}>
          Sign In
        </Text>
        <UserInput name="EMAIL" value={email} setValue={setEmail} />
        <UserInput name="PASSWORD" value={password} setValue={setPassword} />

        <SubmitBottom
          title="sign In"
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <Text style={{alignSelf: 'center'}}>
          Not yet registered?
          <Text onPress={onPressSignUp} style={{color: colors.red}}>
            Sign Up
          </Text>
        </Text>
        <TouchableOpacity onPress={onPressForgot}>
          <Text
            style={{
              color: colors.yellow,
              alignSelf: 'center',
              marginTop: 10,
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
