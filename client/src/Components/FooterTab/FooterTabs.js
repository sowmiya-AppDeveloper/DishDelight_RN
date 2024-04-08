import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../Common/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
const FooterTabs = (props) => {
  const activeColor = colors.orange;
  const inActiveColor = colors.grey;

  switch (props.routeName) {
    case "home":
      return (
        <View>
          <FontAwesome5
            name={"home"}
            size={25}
            color={props.isFocused ? activeColor : inActiveColor}
            style={{ marginBottom: 3, alignSelf: "center" }}
          />
        </View>
      );

    case "save":
      return (
        <View>
          <AntDesign
            name={props.isFocused ? "heart" : "hearto"}
            size={25}
            color={props.isFocused ? activeColor : inActiveColor}
            style={{ marginBottom: 3, alignSelf: "center" }}
          />
        </View>
      );

    case "links":
      return (
        <View>
          <FontAwesome5
            name={"list-ol"}
            size={25}
            color={props.isFocused ? activeColor : inActiveColor}
            style={{ marginBottom: 3, alignSelf: "center" }}
          />
        </View>
      );
    case "uploadRes":
      return (
        <View>
          <AntDesign
            name={props.isFocused ? "cloudupload" : "clouduploado"}
            size={25}
            color={props.isFocused ? activeColor : inActiveColor}
            style={{ marginBottom: 3, alignSelf: "center" }}
          />
        </View>
      );
    case "account":
      return (
        <View>
          <FontAwesome5
            name={"user"}
            size={25}
            color={props.isFocused ? activeColor : inActiveColor}
            style={{ marginBottom: 3, alignSelf: "center" }}
          />
        </View>
      );

    default:
      return null;
  }
};

export default FooterTabs;

const styles = StyleSheet.create({});

// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import {colors} from '../../Common/colors';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import {Divider} from 'react-native-elements';

// export const Tab = ({name, icon, onHandlePress, screenName, routeName}) => {
//   const activeScreenColor = screenName === routeName && colors.orange;
//   return (
//     <TouchableOpacity onPress={onHandlePress}>
//       <FontAwesome5
//         name={icon}
//         size={25}
//         color={activeScreenColor}
//         style={{marginBottom: 3, alignSelf: 'center'}}
//         onPress={onHandlePress}
//       />
//       <Text>{name}</Text>
//     </TouchableOpacity>
//   );
// };

// export default function FooterTabs() {
//   const navigation = useNavigation();
//   const route = useRoute();
//   return (
//     <>
//       <Divider width={1} />

//       <View
//         style={{
//           flexDirection: 'row',
//           margin: 10,
//           marginHorizontal: 30,
//           justifyContent: 'space-between',
//         }}>
//         <Tab
//           name="Home"
//           icon="home"
//           onHandlePress={() => navigation.navigate('home')}
//           screenName="home"
//           routeName={route.name}
//         />
//         <Tab
//           name="Post"
//           icon="plus-square"
//           onHandlePress={() => navigation.navigate('post')}
//           screenName="post"
//           routeName={route.name}
//         />
//         <Tab
//           name="Links"
//           icon="list-ol"
//           onHandlePress={() => navigation.navigate('links')}
//           screenName="links"
//           routeName={route.name}
//         />
//         <Tab
//           name="Account"
//           icon="user"
//           onHandlePress={() => navigation.navigate('account')}
//           screenName="account"
//           routeName={route.name}
//         />
//       </View>
//     </>
//   );
// }
