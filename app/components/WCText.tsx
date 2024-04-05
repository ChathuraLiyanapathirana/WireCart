import React from 'react';
import { Text } from 'react-native';

type WCTextProps = {
  fontSize?:
    | 'cxxs'
    | 'cxs'
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
    | '10xl';
  fontWeight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'extrabold'
    | 'black';
  color?: 'primary' | 'white' | 'lightGreen' | 'secondary' | 'blue' | 'neutral-400';
  classNames?: string;
  children: React.ReactNode;
  trimLengthWithDots?: number;
};

const WCText = ({
  fontSize,
  fontWeight,
  color,
  classNames,
  children,
  trimLengthWithDots,
}: WCTextProps) => {
  let trimmedText = children as string;
  if (trimLengthWithDots && trimmedText.length > trimLengthWithDots) {
    trimmedText = trimmedText.substring(0, trimLengthWithDots) + '...';
  }

  return (
    <Text className={`${classNames} text-${color} font-${fontWeight} text-${fontSize}`}>
      {trimmedText}
    </Text>
  );
};

export default WCText;
