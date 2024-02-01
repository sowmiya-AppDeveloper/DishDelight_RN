import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import DocumentPicker from 'react-native-document-picker';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../Common/colors';
import {testingUrl} from '../../Common/constant';
import {LOG} from '../../Common/utils';
import UserInput from '../../Components/Input/UserInput';
import SubmitBottom from '../../Components/SubmitButton/SubmitBottom';

import ImageResizer from 'react-native-image-resizer';
import {uploadUserImage} from '../../Redux/ApiAction';
const SignIn = props => {
  const navigation = useNavigation();
  const Dispatch = useDispatch();
  const getUserData = useSelector(({api}) => api.getUserData);
  const userDetails = useSelector(({auth}) => auth.userDetails);

  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploadImage, setUploadImage] = useState('');
  const [image, setImage] = useState({url: '', public_id: ''});

  useEffect(() => {
    setImage(getUserData.image);
  }, [getUserData]);

  const handleSubmit = async () => {
    setLoading(true);

    if (!password) {
      Alert.alert('Alert', 'Please Enter your password ', [
        {
          text: 'Ok',
        },
      ]);
      console.log('please enter here');
      setLoading(false);
      return;
    }

    try {
      let tokenData = token && token ? token : '';
      const {data} = await axios.post(
        testingUrl + 'update-password',
        {
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${tokenData}`,
          },
        },
      );
      if (data.error) {
        Alert.alert(data.error);
        setLoading(false);
      } else {
        Alert.alert('👍 Password updated successfully');
        setPassword('');
        setLoading(false);
      }
    } catch (error) {
      Alert.alert('Failed', 'Password update failed.Try again');
      console.log(error);
      setLoading(false);
    }
  };

  const handledUpload = async () => {
    const response = await DocumentPicker.pick({
      presentationStyle: 'fullScreen',
      allowMultiSelection: true,
      type: [DocumentPicker.types.images],
    });

    const imageUri = response[0].uri;

    const compressedImage = await ImageResizer.createResizedImage(
      imageUri,
      800,
      800,
      'JPEG',
      80,
      0,
      undefined,
      undefined,
      {mode: 'contain'},
    );

    var jsonImage = {
      uri: compressedImage.uri,
    };
    // const formData = new FormData();
    // formData.append('uri', jsonImage.uri);

    setUploadImage(jsonImage);

    Dispatch(uploadUserImage(jsonImage));
  };

  const onPressSignUp = () => {
    navigation.navigate('signUp');
  };
  return (
    <KeyboardAvoidingScrollView
      contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
      <View style={{marginVertical: 100}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 20,
          }}>
          <View
            style={{
              backgroundColor: colors.white,
              height: 190,
              width: 190,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {image && image.url ? (
              <Image
                source={{uri: image.url}}
                style={{
                  width: 190,
                  height: 190,
                  borderRadius: 100,
                  marginVertical: 20,
                }}
              />
            ) : uploadImage ? (
              <Image
                source={{uri: uploadImage.uri}}
                style={{
                  width: 190,
                  height: 190,
                  borderRadius: 100,
                  marginVertical: 20,
                }}
              />
            ) : (
              <View>
                <TouchableOpacity onPress={handledUpload}>
                  <FontAwesome5 name="camera" size={25} color={colors.orange} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        {image && image.url ? (
          <>
            <TouchableOpacity onPress={handledUpload}>
              <FontAwesome5
                name="camera"
                size={25}
                color={colors.orange}
                style={{
                  marginBottom: 10,
                  alignSelf: 'center',
                  marginTop: -5,
                }}
              />
            </TouchableOpacity>
          </>
        ) : (
          <></>
        )}

        <Text
          style={{
            fontSize: 20,
            color: colors.black,
            alignSelf: 'center',
            paddingBottom: 10,
          }}>
          {userDetails?.name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: colors.black,
            alignSelf: 'center',
            paddingBottom: 10,
          }}>
          {userDetails?.email}
        </Text>
        <Text
          style={{
            fontSize: 12,
            //color: colors.black,
            alignSelf: 'center',
            paddingBottom: 50,
          }}>
          {userDetails?.role}
        </Text>
        <UserInput name="PASSWORD" value={password} setValue={setPassword} />

        <SubmitBottom
          title="Update Password"
          handleSubmit={handleSubmit}
          loading={loading}
        />
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
