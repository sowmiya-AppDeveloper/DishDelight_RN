import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../Common/colors';
import UserInput from '../Components/Input/UserInput';
import SubmitBottom from '../Components/SubmitButton/SubmitBottom';
import {forgotPassword, resetPassword} from '../Redux/AuthAction';
import AppLogo from './AppLogo';

const ForgotPassword = props => {
  const navigation = useNavigation();
  const Dispatch = useDispatch();

  const forgotDetails = useSelector(({auth}) => auth.forgotDetails);

  const [email, setEmail] = useState('sowmiyai156@gmail.com');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [resetCode, setResetCode] = useState('');
  useEffect(() => {
    if (forgotDetails.ok == true) {
      setVisible(true);
    }
  }, [forgotDetails]);

  const handleSubmit = async () => {
    setLoading(true);
    if (!email) {
      Alert.alert('Email is required');
      setLoading(false);
      return;
    }
    try {
      Dispatch(forgotPassword({email}));
      setLoading(false);
    } catch (error) {
      Alert.alert('Error send email,Try Again');
      console.log(error);
    }
  };

  const handlePasswordReset = async () => {
    console.log('HANDEL PASSWORD RESET', email, password, resetCode);
    setLoading(true);
    if (!email || !password || !resetCode) {
      Alert.alert('Alert', 'All inputs are required ', [
        {
          text: 'Ok',
        },
      ]);
      console.log('please enter here');
      setLoading(false);
      return;
    }

    const data = {
      email,
      password,
      resetCode,
    };

    Dispatch(resetPassword(data));

    try {
    } catch (error) {
      setLoading(false);
      Alert.alert('Password reset failed,Try again');
      console.log(error);
    }
  };
  const onPressGoBack = () => {
    navigation.goBack();
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
            marginBottom: 50,
          }}>
          Forgot Password
        </Text>
        <UserInput name="EMAIL" value={email} setValue={setEmail} />

        {visible && (
          <>
            <UserInput
              name="NEW PASSWORD"
              value={password}
              setValue={setPassword}
            />

            <UserInput
              name="PASSWORD RESET CODE"
              value={resetCode}
              setValue={setResetCode}
            />
          </>
        )}

        <SubmitBottom
          title={visible ? 'Reset Password' : 'Request Reset Code'}
          handleSubmit={visible ? handlePasswordReset : handleSubmit}
          loading={loading}
        />
        <TouchableOpacity onPress={onPressGoBack}>
          <Text
            style={{
              color: colors.yellow,
              alignSelf: 'center',
              marginTop: 10,
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
