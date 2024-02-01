import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../Common/colors';
import UserInput from '../Components/Input/UserInput';
import SubmitBottom from '../Components/SubmitButton/SubmitBottom';
import axios from 'axios';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLogo from './AppLogo';
import {testingUrl} from '../Common/constant';
import {initSpinner} from '../Redux/ApiAction';
import {signUp} from '../Redux/AuthAction';
import {useDispatch} from 'react-redux';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('sowmiya');
  const [email, setEmail] = useState('joteyi7760@twugg.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);
  const Dispatch = useDispatch();
  const handleSubmit = async () => {
    console.log('insideHandleSubmit');
    setLoading(true);
    if (!name || !email || !password) {
      Alert.alert('Alert', 'All inputs are required ', [
        {
          text: 'Ok',
        },
      ]);
      console.log('please enter here');
      setLoading(false);
      return;
    }
    console.log('sing up request ==>', name, password, email);
    try {
      setLoading(true);
      // const data = await axios.post(testingUrl + 'signup', {
      //   name,
      //   email,
      //   password,
      // });

      Dispatch(initSpinner());
      var userDetails = {
        name,
        email,
        password,
      };

      Dispatch(signUp(userDetails));
      console.log('singInRequest ==>', userDetails);
    } catch (error) {
      console.log('any error', error);
      setLoading(false);
    }
  };

  const onPressSignIn = () => {
    navigation.navigate('signIn');
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
          Sign Up
        </Text>
        <UserInput name="NAME" value={name} setValue={setName} />
        <UserInput name="EMAIL" value={email} setValue={setEmail} />
        <UserInput name="PASSWORD" value={password} setValue={setPassword} />

        <SubmitBottom
          title="sign Up"
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <Text style={{alignSelf: 'center'}}>
          Already Joined?{' '}
          <Text onPress={onPressSignIn} style={{color: colors.red}}>
            Sign In
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
