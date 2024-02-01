import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../Common/colors';
import {productRating} from '../../Redux/ApiAction';
import {LOG} from '../../Common/utils';

const {width, height} = Dimensions.get('screen');

const RatingDialog = ({isVisible, onClose, value, screenName}) => {
  const dispatch = useDispatch();
  const userDetails = useSelector(({auth}) => auth.userDetails);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');

  const handleRatingPress = newRating => {
    setRating(newRating);
  };

  const handleChange = text => {
    setText(text);
  };

  const getEmojiForRating = rating => {
    if (rating >= 4.5) {
      return ' High 😍'; // Heart eyes emoji for high ratings
    } else if (rating >= 4) {
      return ' Good 😊'; // Smiling face emoji for good ratings
    } else if (rating >= 3) {
      return ' Average 😐'; // Neutral face emoji for average ratings
    } else if (rating >= 2) {
      return 'Low 😞'; // Disappointed face emoji for low ratings
    } else {
      return 'Very Low 😔'; // Sad face emoji for very low ratings
    }
  };
  const onClickSendRating = () => {
    var jsonData = {
      productId: value._id,
      rating: rating,
      userId: userDetails._id,
      reviews: text,
      name: userDetails.name,
    };

    dispatch(productRating(jsonData, {extraData: screenName}));
    onClose();
  };

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      style={styles.closeFormModalStyle}>
      <TouchableOpacity
        style={styles.closeFormContainerStyle}
        onPress={() => onClose()}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            // padding: 15,
            // borderRadius: 10,
            marginHorizontal: 20,
          }}
          disabled={false}
          activeOpacity={1}>
          <View
            style={{
              height: height / 12,
              backgroundColor: colors.orange,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'flex-end',
                marginHorizontal: 5,
                marginTop: 5,
              }}
              onPress={() => onClose()}>
              <AntDesign name={'close'} size={30} color={colors.white} />
            </TouchableOpacity>

            {/* <View
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 5,
                width: 100,
                height: 100,
              }}>
              <Image
                source={{uri: value.image}}
                style={{
                  width: 100,
                  height: 100,
                  alignItems: 'center',
                  // resizeMode: 'cover',
                }}
              />
            </View> */}
          </View>
          <View style={{marginTop: 1, alignSelf: 'center'}}>
            <Text
              style={{fontSize: 20, color: colors.black, textAlign: 'center'}}>
              {value.name}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: colors.orange,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              𝐘𝐎𝐔𝐑 𝐑𝐀𝐓𝐈𝐍𝐆
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 10,
            }}>
            {[1, 2, 3, 4, 5].map(star => (
              <TouchableOpacity
                key={star}
                onPress={() => handleRatingPress(star)}
                style={{padding: 10}}>
                <Icon
                  name={star <= rating ? 'star' : 'star-o'}
                  size={30}
                  color={star <= rating ? 'gold' : 'gray'}
                />
              </TouchableOpacity>
            ))}
          </View>

          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,

              color: rating > 0 ? colors.grey : null,
            }}>
            {rating > 0 ? ` ${getEmojiForRating(rating)}` : ''}
          </Text>
          <View style={{marginTop: 1}}>
            <Text
              style={{
                fontSize: 16,
                color: colors.orange,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              𝙍𝙀𝙑𝙄𝙀𝙒
            </Text>
            <View>
              <TextInput
                multiline={true}
                value={text}
                onChangeText={text => handleChange(text)}
                placeholder="Write your review here"
                autoCapitalize="none"
                autoCorrect={false}
                style={{
                  borderColor: colors.grey,
                  marginHorizontal: 20,
                  borderRadius: 30,
                }}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={onClickSendRating}
            style={{
              backgroundColor: colors.orange,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 20,
              marginVertical: 20,
              padding: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{color: colors.white, fontWeight: 'bold', fontSize: 18}}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};
const styles = StyleSheet.create({
  closeFormModalStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    presentationStyle: 'overFullScreen',
  },
  closeFormContainerStyle: {
    backgroundColor: colors.transparentGrey,
    justifyContent: 'center',
    flex: 1,
  },
});

export default RatingDialog;
