import React from 'react';
import { View } from 'react-native';

import WCText from './WCText';

type WCProductMetaTagProps = {
  wrapperClassNames?: string;
  tagClassNames?: string;
  tagText: string;
};

const WCProductMetaTag = ({ tagClassNames, wrapperClassNames, tagText }: WCProductMetaTagProps) => {
  return (
    <View className={wrapperClassNames}>
      <WCText classNames={tagClassNames}>{tagText}</WCText>
    </View>
  );
};

export default WCProductMetaTag;
