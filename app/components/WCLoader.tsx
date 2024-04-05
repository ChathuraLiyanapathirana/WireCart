import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { COLORS } from 'constants/colors';

const WCLoader = () => {
  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <ActivityIndicator color={COLORS.primary} size={'large'} />
    </View>
  );
};

export default WCLoader;
