import React from 'react';
import { View } from 'react-native';

import WCProductPricing from './WCProductPricing';
import WCText from './WCText';

type WCCardProductDetailsProps = {
  name: string;
  currency: string;
  newPrice: string;
  oldPrice: string;
};

const WCCardProductDetails = ({
  name,
  currency,
  newPrice,
  oldPrice,
}: WCCardProductDetailsProps) => (
  <View className='p-2 h-20 bg-emerald-50 rounded-b-lg'>
    <WCText fontWeight='semibold' color='secondary' classNames='capitalize text-[12px]'>
      {name}
    </WCText>

    <WCProductPricing
      currency={currency}
      newPrice={newPrice}
      oldPrice={oldPrice}
      wrapperClassNames='absolute bottom-2 left-2 flex-row items-baseline'
      currencyClassNames='text-[10px] capitalize text-primary'
      newPriceClassNames='text-[14px] capitalize text-primary'
      oldPriceClassNames='line-through text-slate-400 text-[8px] capitalize'
    />
  </View>
);

export default WCCardProductDetails;
