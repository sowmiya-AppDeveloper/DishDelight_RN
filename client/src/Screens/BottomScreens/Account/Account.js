import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import DocumentPicker from "react-native-document-picker";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";

import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../../config";
import { colors } from "../../../Common/colors";
import { testingUrl } from "../../../Common/constant";
import { LOG, removeItem } from "../../../Common/utils";
import UserInput from "../../../Components/Input/UserInput";
import SubmitBottom from "../../../Components/SubmitButton/SubmitBottom";
import { uploadUserImage } from "../../../Redux/ApiAction";
import Entypo from "react-native-vector-icons/Entypo";
import { launchCamera } from "react-native-image-picker";

const Account = (props) => {
  const navigation = useNavigation();
  const Dispatch = useDispatch();
  const getUserData = useSelector(({ api }) => api.getUserData);
  const userDetails = useSelector(({ auth }) => auth.userDetails);

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const imageData =
      getUserData != "no image"
        ? `${config.API_URL}home/bi1466/sowmiya/DisDelightAssets/${getUserData}`
        : "";
    LOG("imageData", imageData);

    setImage(imageData);
  }, [getUserData]);

  const handleSubmit = async (v) => {
    if (v == 1) {
      removeItem("userDetails");

      navigation.reset({
        index: 0,
        routes: [{ name: "signIn" }],
      });
    } else {
      setLoading(true);

      if (!password) {
        Alert.alert("Alert", "Please Enter your password ", [
          {
            text: "Ok",
          },
        ]);
        console.log("please enter here");
        setLoading(false);
        return;
      }

      try {
        let tokenData = token && token ? token : "";
        const { data } = await axios.post(
          testingUrl + "update-password",
          {
            password,
          },
          {
            headers: {
              Authorization: `Bearer ${tokenData}`,
            },
          }
        );
        if (data.error) {
          Alert.alert(data.error);
          setLoading(false);
        } else {
          Alert.alert("👍 Password updated successfully");
          setPassword("");
          setLoading(false);
        }
      } catch (error) {
        Alert.alert("Failed", "Password update failed.Try again");
        console.log(error);
        setLoading(false);
      }
    }
  };

  const handledUpload = () => {
    setModal(true);
  };
  const onFileUploadPress = async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
        allowMultiSelection: false,
        type: [DocumentPicker.types.images],
      });

      const imageData = response[0];

      var jsonImage = {
        uri: imageData.uri,
        name: imageData.name,
        type: imageData.type,
      };

      let formData = new FormData();
      formData.append("image", jsonImage);
      formData.append("_id", userDetails._id);
      Dispatch(uploadUserImage(formData));
      setModal(false);
    } catch (err) {
      console.warn("Error occurred while getting files from device", err);
      Toast("Please try again");
      setModal(false);
    }
  };
  const onCameraPress = async () => {
    launchCamera({
      mediaType: "photo",
      cameraType: "back",
      includeBase64: false,
      saveToPhotos: true,
    })
      .then((res) => {
        const files = res;
        let jsonFiles = {
          uri: files.assets[0].uri,
          name: files.assets[0].fileName,
          type: files.assets[0].type,
        };

        let formData = new FormData();
        formData.append("image", jsonFiles);
        formData.append("_id", userDetails._id);
        Dispatch(uploadUserImage(formData));
        setModal(false);
      })
      .catch((err) => {
        LOG("error occurred while getting camera :", err);
        setModal(false);
      });
  };
  const onPressSignUp = () => {
    navigation.navigate("signUp");
  };
  return (
    <KeyboardAvoidingScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "center" }}>
      <View style={{ marginVertical: 100 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 20,
          }}>
          <View
            style={{
              backgroundColor: colors.white,
              height: 190,
              width: 190,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}>
            {image ? (
              <Image
                source={{
                  uri: image,
                }}
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
        {image ? (
          <>
            <TouchableOpacity onPress={handledUpload}>
              <FontAwesome5
                name="camera"
                size={25}
                color={colors.orange}
                style={{
                  marginBottom: 10,
                  alignSelf: "center",
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
            alignSelf: "center",
            paddingBottom: 10,
          }}>
          {userDetails?.name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: colors.black,
            alignSelf: "center",
            paddingBottom: 10,
          }}>
          {userDetails?.email}
        </Text>
        <Text
          style={{
            fontSize: 12,
            //color: colors.black,
            alignSelf: "center",
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
        <SubmitBottom
          title="Logout"
          handleSubmit={() => handleSubmit(1)}
          loading={loading}
        />
      </View>
      <Modal animationType={"fade"} transparent={true} visible={modal}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.container2}
          onPress={() => setModal(false)}>
          <View style={styles.AlertBase}>
            <View style={styles.fileUploadView}>
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={onCameraPress}>
                <Entypo name="camera" size={50} color={colors.thinBlack} />
                <Text style={{ textAlign: "center" }}>Camera</Text>
              </TouchableOpacity>

              <View style={styles.itemSep} />

              <TouchableOpacity
                style={styles.uploadButton}
                onPress={onFileUploadPress}>
                <Entypo name="folder" size={50} color={colors.yellow} />
                <Text style={{ textAlign: "center" }}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </KeyboardAvoidingScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: colors.transparentGrey,
    justifyContent: "flex-end",
  },

  AlertBase: {
    backgroundColor: colors.white,
    width: "100%",
    paddingTop: 25,
    overflow: "hidden",
    height: "20%",
    // alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  fileUploadView: {
    flexDirection: "row",
  },
  uploadButton: {
    marginHorizontal: 20,
    padding: 10,
  },
});
