import React from 'react';
import { Image, View } from 'react-native';

type WCProductImageProps = {
  imageUrl: string;
  wrapperClassNames?: string;
  imageClassNames?: string;
};

const WCProductImage = ({ imageUrl, imageClassNames, wrapperClassNames }: WCProductImageProps) => (
  <View className={wrapperClassNames}>
    <Image
      source={{ uri: imageUrl }}
      className={imageClassNames}
      resizeMode='cover'
      resizeMethod='resize'
    />
  </View>
);

export default WCProductImage;
