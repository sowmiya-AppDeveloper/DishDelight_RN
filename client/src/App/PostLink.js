// import React in our code
import React, {useCallback, useRef, useState} from 'react';

// import all the components we are going to use
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

//Import React Native Video to play video

//Media Controls to control Play/Pause/Seek and full screen
import VideoScreen from './VideoScreen';
import {TextInput} from 'react-native-paper';

const PostLink = () => {
  const videoLink = [
    {
      id: 1,
      videoLink:
        'https://cdn.coverr.co/videos/coverr-stream-next-to-the-road-4482/1080p.mp4',
    },
    {
      id: 2,
      videoLink:
        'https://pixabay.com/videos/light-abstract-purple-background-18702/',
    },
    {
      id: 3,
      videoLink:
        'https://cdn.coverr.co/videos/coverr-stream-next-to-the-road-4482/1080p.mp4',
    },
    {
      id: 4,
      videoLink:
        'https://cdn.coverr.co/videos/coverr-stream-next-to-the-road-4482/1080p.mp4',
    },
    {
      id: 5,
      videoLink:
        'https://cdn.coverr.co/videos/coverr-stream-next-to-the-road-4482/1080p.mp4',
    },
  ];

  const [count, setCount] = useState(0);
  const [data, setData] = useState(videoLink);
  const [cartd, setCart] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [password, setpassword] = useState('');
  const intervalRef = useRef(0);
  const nameRef = useRef('');
  const passRef = useRef('');
  const ageRef = useRef('');
  const onPressCount = () => {
    setCount(count + 1);
  };
  const cart = useCallback(() => {
    setCart(cartd + 1);
  }, [cartd]);

  const onPressAssain = () => {
    intervalRef.current = intervalRef.current + 1;
  };
  const onChengeName = text => {
    setName(text);
  };
  const onChengePass = set => {
    setpassword(set);
  };
  const onChengeAge = age => {
    setAge(age);
  };
  const onSub = sub => {
    console.log('xxxxxxxxxxxxxxxx', sub);

    if (sub == 0 && password.length == 0) {
      passRef.current.focus();
    } else if (sub == 1 && age == 0) {
      ageRef.current.focus();
    }
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <Text>Count {count}</Text>
        <TouchableOpacity onPress={onPressCount}>
          <Text>Count</Text>
        </TouchableOpacity>
        <Text>cart {cartd}</Text>
      </View>
      {data.map((item, index) => {
        return <VideoScreen item={item} key={index} cart={cart} />;
      })}
      <View>
        <Text>{count}</Text>
        <Button title="Stop" onPress={onPressAssain} />
        <Button title="Count" onPress={onPressCount} />
        <Text>{intervalRef.current}</Text>
      </View>
      <TextInput
        value={name}
        onChangeText={onChengeName}
        ref={nameRef}
        onSubmitEditing={onSub.bind(this, 0)}
      />
      <TextInput
        value={password}
        onChangeText={onChengePass}
        ref={passRef}
        onSubmitEditing={onSub.bind(this, 1)}
      />
      <TextInput
        value={age}
        onChangeText={onChengeAge}
        ref={ageRef}
        onSubmitEditing={onSub.bind(this, 2)}
      />
    </View>
  );
};

export default PostLink;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
});
