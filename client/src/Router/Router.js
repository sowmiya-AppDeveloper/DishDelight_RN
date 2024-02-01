import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import ForgotPassword from '../App/ForgotPassword';
import PostLink from '../App/PostLink';
import SignIn from '../App/SignIn';
import SignUp from '../App/SignUp';
import {navigationRef} from '../Common/RootNavigation';
import {getItem} from '../Common/utils';
import HeaderTabs from '../Components/HeaderTabs';
import Account from '../BottomScreens/Account/Account';
import Home from '../BottomScreens/Home/Home';
import Links from '../BottomScreens/Links';
import Application from '../Screens/App/Application';
import CategoryItem from '../Screens/Category/CategoryItem';
import RecipeDescription from '../Screens/RecipeDescription';
import FooterTabs from '../Components/FooterTab/FooterTabs';
import {colors} from '../Common/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {Divider} from 'react-native-elements';
import RoutineItem from '../BottomScreens/Home/RoutineItem';
import CategoriesDescription from '../Screens/Category/CategoriesDescription';
import Review from '../Screens/Category/Review';
import Chat from '../BottomScreens/Chat/Chat';

export const navigateRef = createNavigationContainerRef();
const {width, height} = Dimensions.get('screen');
const Router = () => {
  const stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeTab = () => {
    return (
      <Tab.Navigator tabBar={props => <HomeTabBar {...props} />}>
        <Tab.Screen
          name={'home'}
          component={Home}
          options={{
            tabBarLabel: 'Home',
            color: colors.orange,
            headerShown: false,
          }}
        />

        <Tab.Screen
          name={'post'}
          component={PostLink}
          options={{
            headerRight: () => <HeaderTabs />,
            tabBarLabel: 'Post',
            color: colors.orange,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={'links'}
          component={Links}
          options={{
            headerRight: () => <HeaderTabs />,
            tabBarLabel: 'Links',
            color: colors.orange,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={'account'}
          component={Account}
          options={{
            headerTitleAlign: 'center',

            headerRight: () => <HeaderTabs />,
            tabBarLabel: 'Account',
            color: colors.orange,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <stack.Navigator initialRouteName="application">
        <stack.Screen
          name={'application'}
          component={Application}
          options={{headerShown: false}}
        />
        <stack.Screen
          options={{
            headerBackVisible: false,
            gestureEnabled: true,
            navigationBarHidden: true,
            headerShown: false,
            animation: 'slide_from_bottom',
          }}
          name="home"
          component={HomeTab}
        />

        <>
          <stack.Screen
            name={'categories'}
            component={CategoryItem}
            options={{
              headerShown: false,
              animation: 'slide_from_left',
            }}
          />
          <stack.Screen
            name={'description'}
            component={RecipeDescription}
            options={{
              headerShown: false,
              animation: 'slide_from_left',
            }}
          />
        </>

        <>
          <stack.Screen
            name={'signUp'}
            component={SignUp}
            options={{
              headerBackVisible: false,
              gestureEnabled: true,
              navigationBarHidden: true,
              headerShown: false,
              animation: 'slide_from_bottom',
            }}
          />
          <stack.Screen
            name={'signIn'}
            component={SignIn}
            options={{
              headerBackVisible: false,
              gestureEnabled: true,
              navigationBarHidden: true,
              headerShown: false,
              animation: 'slide_from_bottom',
            }}
          />
          <stack.Screen
            name={'forgot'}
            component={ForgotPassword}
            options={{
              headerBackVisible: false,
              gestureEnabled: true,
              navigationBarHidden: true,
              headerShown: false,
              animation: 'slide_from_bottom',
            }}
          />
          <stack.Screen
            name={'routine'}
            component={RoutineItem}
            options={{
              headerBackVisible: false,
              gestureEnabled: true,
              navigationBarHidden: true,
              headerShown: false,
              animation: 'slide_from_bottom',
            }}
          />
          <stack.Screen
            name={'categoriesDescription'}
            component={CategoriesDescription}
            options={{
              headerBackVisible: false,
              gestureEnabled: true,
              navigationBarHidden: true,
              headerShown: false,
              animation: 'slide_from_bottom',
            }}
          />
          <stack.Screen
            name={'reviewScreen'}
            component={Review}
            options={{
              headerBackVisible: false,
              gestureEnabled: true,
              navigationBarHidden: true,
              headerShown: false,
              animation: 'slide_from_bottom',
            }}
          />
          <stack.Screen
            name={'chat'}
            component={Chat}
            options={{
              headerBackVisible: false,
              gestureEnabled: true,
              navigationBarHidden: true,
              headerShown: false,
              animation: 'slide_from_bottom',
            }}
          />
        </>
      </stack.Navigator>
    </NavigationContainer>
  );
};
const HomeTabBar = ({state, descriptors, navigation}) => {
  return (
    <>
      <Divider width={1} />
      <View style={styles.customTabBar}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.baseView}>
              <FooterTabs isFocused={isFocused} routeName={route.name} />
              <Text
                style={{
                  color: isFocused ? colors.orange : colors.grey,
                  marginTop: 5,
                  fontSize: 12,
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default Router;

const styles = StyleSheet.create({
  tabView: {
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 5,
  },
  tabLabel: {
    fontSize: 12,
    textAlign: 'center',
    // fontFamily: textFontFace,
    alignSelf: 'center',
  },
  customTabBar: {
    flexDirection: 'row',
    // borderTopWidth: 1,
    // backgroundColor: colors.black,
    paddingVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: height / 10,
    width: width / 1,
  },
  baseView: {flex: 1, alignItems: 'center'},
});
