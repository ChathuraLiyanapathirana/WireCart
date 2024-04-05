import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import WCText from './WCText';

type WCQtyTogglerProps = {
  onIncrement: () => void;
  onDecrement: () => void;
  qty: number;
};

const WCQtyToggler = ({ onDecrement, onIncrement, qty }: WCQtyTogglerProps) => {
  return (
    <View className='flex-row justify-between items-center'>
      <View className='flex-row justify-center items-center'>
        <TouchableOpacity
          onPress={onDecrement}
          className='w-6 h-6 bg-slate-200 justify-center items-center mr-3'
        >
          <WCText fontWeight='semibold' color='secondary' classNames='text-[14px]'>
            -
          </WCText>
        </TouchableOpacity>
        <WCText fontWeight='semibold' color='secondary' classNames='text-[14px]'>
          {qty}
        </WCText>
        <TouchableOpacity
          onPress={onIncrement}
          className='w-6 h-6 bg-slate-200 justify-center items-center ml-3'
        >
          <WCText fontWeight='semibold' color='secondary' classNames='text-[14px]'>
            +
          </WCText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WCQtyToggler;
