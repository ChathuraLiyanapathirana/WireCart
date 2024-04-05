import React from 'react';
import { View } from 'react-native';

import WCText from './WCText';

type WCProductPricingProps = {
  currency?: string;
  newPrice?: string;
  oldPrice?: string;
  wrapperClassNames?: string;
  currencyClassNames?: string;
  newPriceClassNames?: string;
  oldPriceClassNames?: string;
};

const WCProductPricing = ({
  currency,
  newPrice,
  oldPrice,
  wrapperClassNames,
  currencyClassNames,
  newPriceClassNames,
  oldPriceClassNames,
}: WCProductPricingProps) => (
  <View className={wrapperClassNames}>
    <View className='flex-row items-baseline mr-1'>
      <WCText fontWeight='light' classNames={currencyClassNames}>
        {`${currency} `}
      </WCText>
      <WCText fontWeight='semibold' classNames={newPriceClassNames}>
        {newPrice}
      </WCText>
    </View>
    <WCText fontWeight='extralight' classNames={oldPriceClassNames}>
      {`${currency} ${oldPrice}`}
    </WCText>
  </View>
);

export default WCProductPricing;
