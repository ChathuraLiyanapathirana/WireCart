import React from 'react';
import { ColorValue } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from 'constants/colors';

import CartStack from './CartStack';
import HomeStack from './HomeStack';

const BottomTab = createBottomTabNavigator();

const RootNavigation = () => {
  const getTabBarIcon = (
    route: RouteProp<ParamListBase, string>,
    focused: boolean,
    color: number | ColorValue | undefined
  ) => {
    let iconName;

    switch (route.name) {
      case 'Home':
        iconName = focused ? 'home' : 'home-outline';
        break;
      case 'Cart':
        iconName = focused ? 'cart' : 'cart-outline';
        break;
      default:
        iconName = focused ? 'home' : 'home-outline';
    }

    return <Ionicons name={iconName} size={22} color={color} />;
  };

  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarStyle: {
            backgroundColor: COLORS.white,
            display: getFocusedRouteNameFromRoute(route) !== 'ProductScreen' ? 'flex' : 'none',
          },
          tabBarIcon: ({ focused, color }) => {
            return getTabBarIcon(route, focused, color);
          },
        })}
      >
        <BottomTab.Screen name='Home' component={HomeStack} />
        <BottomTab.Screen name='Cart' component={CartStack} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
