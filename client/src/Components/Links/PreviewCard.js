import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../Common/colors';
import Video from 'react-native-video';

const PreviewCard = props => {
  return (
    <View>
      <Video
        source={{
          url: 'https://cdn.coverr.co/videos/coverr-stream-next-to-the-road-4482/1080p.mp4',
        }}
        style={styles.vid}
        controls={true}
      />
    </View>
  );
};

export default PreviewCard;

const styles = StyleSheet.create({
  vid: {
    height: 300,
    width: 300,
  },
});
