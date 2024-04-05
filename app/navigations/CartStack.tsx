import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CartStackParamList } from 'types/navigationTypes';

import CartScreen from 'screens/CartScreen';

import { COLORS } from 'constants/colors';

const Stack = createNativeStackNavigator<CartStackParamList>();

const CartStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='CartScreen'
      component={CartScreen}
      options={{
        headerTitle: 'Cart',
        headerTintColor: `${COLORS.primary}`,
      }}
    />
  </Stack.Navigator>
);

export default CartStack;
