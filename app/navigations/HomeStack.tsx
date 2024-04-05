import React, { useCallback } from 'react';
import { View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeStackParamList } from 'types/navigationTypes';

import HomeScreen from 'screens/HomeScreen';
import ProductScreen from 'screens/ProductScreen';

import WCText from 'components/WCText';

import { COLORS } from 'constants/colors';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  const renderHomeTitle = useCallback(() => {
    return (
      <View className='flex-row flex justify-center items-baseline'>
        <Ionicons name='cart' size={22} color={COLORS.primary} />
        <WCText color='primary' classNames='text-[28px] font-bold ml-1'>
          Wire
        </WCText>
        <WCText color='secondary' classNames='text-[14px] font-extralight'>
          Cart
        </WCText>
      </View>
    );
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerLeft: () => renderHomeTitle(),
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name='ProductScreen'
        component={ProductScreen}
        options={{
          headerBackTitle: 'Back',
          headerTintColor: COLORS.primary,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
