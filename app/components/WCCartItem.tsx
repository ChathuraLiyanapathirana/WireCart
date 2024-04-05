import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ProductType } from 'types/appTypes';

import { COLORS } from 'constants/colors';

import WCProductImage from './WCProductImage';
import WCProductMetaTag from './WCProductMetaTag';
import WCQtyToggler from './WCQtyToggler';
import WCText from './WCText';

type WCCartItemProps = Partial<ProductType> & {
  onIncrement?: (id: string) => void;
  onDecrement?: (id: string) => void;
  onRemove?: (id: string) => void;
  toggleItemSelection?: (id: string) => void;
  selectedSize?: string;
  selectedColor?: string;
  fromCart?: boolean;
  qty?: number;
  selected?: boolean;
};

const WCCartItem = ({
  onIncrement,
  onDecrement,
  onRemove,
  toggleItemSelection,
  selectedSize,
  selectedColor,
  qty,
  fromCart,
  brandName,
  currency,
  id,
  newPrice,
  name,
  mainImage,
  selected,
}: WCCartItemProps) => {
  const cardWrapperClassNames = fromCart && 'rounded-lg bg-white shadow-md';
  console.log('selected', selected);
  return (
    <>
      <View className={`${cardWrapperClassNames} w-full h-28 flex-row justify-start items-star`}>
        <View className='flex-row items-center bg-emerald-50 rounded-lg'>
          {fromCart && (
            <CheckBox
              disabled={false}
              value={selected}
              onValueChange={() => toggleItemSelection?.(id as string)}
              boxType='square'
              tintColors={{ true: COLORS.primary, false: 'grey' }}
              onCheckColor={COLORS.primary}
              onTintColor={COLORS.primary}
              style={styles.checkbox}
            />
          )}
          <WCProductImage
            imageUrl={mainImage as string}
            wrapperClassNames=' h-28 w-28 justify-center items-center'
            imageClassNames='h-24 w-24 rounded-lg'
          />
        </View>
        <View className='flex-col justify-around flex-1 items-start ml-2 pr-2 pt-2 pb-2'>
          <View className='flex-row items-center justify-between'>
            <WCText
              fontWeight='semibold'
              color='secondary'
              classNames='capitalize text-[16px] flex-grow'
              trimLengthWithDots={fromCart ? 15 : 25}
            >
              {name}
            </WCText>
            {fromCart && (
              <Ionicons
                name='trash'
                size={20}
                color={COLORS.danger}
                onPress={() => onRemove?.(id as string)}
              />
            )}
          </View>
          <WCText fontWeight='light' color='secondary' classNames='capitalize text-[14px]'>
            {brandName}
          </WCText>
          {fromCart ? (
            <View className='flex-row pb-2'>
              {selectedColor && (
                <WCProductMetaTag
                  tagText={`Color: ${selectedColor}`}
                  tagClassNames='capitalize text-[12px] text-secondary font-normal'
                  wrapperClassNames='border rounded-lg items-center justify-center pl-2 pr-2 h-5 mr-2'
                />
              )}
              {selectedSize && (
                <WCProductMetaTag
                  tagText={`Size: ${selectedSize}`}
                  tagClassNames='capitalize text-[12px] text-secondary font-normal'
                  wrapperClassNames='border rounded-lg items-center pl-2 pr-2 justify-center h-5'
                />
              )}
            </View>
          ) : null}
          <View className='flex-row justify-between items-center'>
            <WCText
              fontWeight='semibold'
              color='primary'
              classNames='capitalize text-[16px] flex-grow'
            >
              {`${currency} ${newPrice}`}
            </WCText>
            {fromCart && onDecrement && onDecrement && qty && (
              <WCQtyToggler
                onIncrement={() => onIncrement?.(id as string)}
                onDecrement={() => onDecrement?.(id as string)}
                qty={qty}
              />
            )}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 15,
    height: 15,
    ...Platform.select({
      ios: {
        marginLeft: 10,
        marginRight: 0,
      },
      android: {
        marginLeft: 0,
        marginRight: 10,
      },
    }),
  },
});

export default WCCartItem;
