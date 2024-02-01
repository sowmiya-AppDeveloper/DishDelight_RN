// ThemedChat.js
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../Common/colors';
import {
  textFontFace,
  textFontFaceLight,
  textFontFaceSemiBold,
} from '../../Common/styles';

const Chat = () => {
  const data = [
    {
      name: 'Surya',
      id: 1,
      image:
        'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'today',
      about: 'I know my self',
    },
    {
      name: 'Ammu',
      id: 2,
      image:
        'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'yesterday',
      about: 'I know my self',
    },
    {
      name: 'Kalai',
      id: 3,
      image:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '10/11/22',
      about: 'I know my self',
    },
    {
      name: 'Jackey',
      id: 4,
      image:
        'https://images.unsplash.com/photo-1609010697446-11f2155278f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '01/11/22',
      about: 'I know my self',
    },
    {
      name: 'Lalitha',
      id: 5,
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'yesterday',
      about: 'I know my self',
    },
    {
      name: 'Indhu',
      id: 6,
      image:
        'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'today',
      about: 'I know my self',
    },
    {
      name: 'Sowmiya',
      id: 7,
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '09/10/22',
      about: 'I know my self',
    },
  ];
  const renderChatPerson = ({item}) => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.transparent,
              }}>
              <Image
                source={{uri: item.image}}
                style={{height: 50, width: 50, borderRadius: 25}}
              />
            </View>
            <View>
              <Text style={styles.messengerName}>{item.name}</Text>
              <Text style={{fontSize: 12}}>{item.about}</Text>
            </View>
          </View>
          <Text style={{fontFamily: textFontFaceLight}}>{item.date}</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 0.3,
            borderBottomColor: colors.grey,
            // marginTop: 10,
            marginHorizontal: 20,
          }}></View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../Asserts/Images/sparkle.jpg')}
        style={{flex: 1}}>
        <Text style={styles.headerMessage}>Message's (20)</Text>

        <LinearGradient
          colors={[colors.white, '#fbe6ef', '#d8e2e7']}
          start={{x: 1, y: 0, z: 0}}
          end={{x: 1, y: 1, z: 0}}
          style={{
            backgroundColor: colors.white,
            flex: 1,
            marginTop: 100,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}>
          <View style={{flex: 1}}>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={renderChatPerson}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  headerMessage: {
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
    color: colors.white,
  },
  messengerName: {
    marginHorizontal: 10,
    fontFamily: textFontFace,
  },
});

export default Chat;
