import React from 'react';
import { TouchableOpacity } from 'react-native';

import WCText from './WCText';

type WCButtonProps = {
  wrapperClassNames?: string;
  buttonClassNames?: string;
  buttonText: string;
  onPress: () => void;
};

const WCButton = ({ buttonText, onPress, buttonClassNames, wrapperClassNames }: WCButtonProps) => {
  return (
    <TouchableOpacity className={wrapperClassNames} onPress={onPress}>
      <WCText classNames={buttonClassNames}>{buttonText}</WCText>
    </TouchableOpacity>
  );
};

export default WCButton;
