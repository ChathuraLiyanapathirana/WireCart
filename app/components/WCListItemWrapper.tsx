import React from 'react';
import { View } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const WCListItemWrapper = ({ children }: Props) => {
  return <View className='w-1/2'>{children}</View>;
};

export default WCListItemWrapper;
