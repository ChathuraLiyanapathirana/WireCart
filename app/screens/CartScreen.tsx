import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';

import { CartItemWithProductDataType } from 'types/appTypes';

import WCButton from 'components/WCButton';
import WCCartItem from 'components/WCCartItem';
import WCText from 'components/WCText';

import useCartStore from 'store/cartStore';

const CartScreen = () => {
  const { items, decrementQty, incrementQty, removeFromCart, toggleItemSelection, getTotalAmount } =
    useCartStore();

  const currency = items[0]?.currency;

  const renderCartItem = ({ item }: ListRenderItemInfo<CartItemWithProductDataType>) => {
    return (
      <View className='mb-3'>
        <WCCartItem
          name={item.name}
          newPrice={item.newPrice}
          mainImage={item.mainImage}
          qty={item.qty}
          selectedColor={item.color}
          selectedSize={item.size}
          id={item.id}
          currency={item.currency}
          fromCart
          onIncrement={() => incrementQty(item.id)}
          onDecrement={() => decrementQty(item.id)}
          onRemove={() => removeFromCart(item.id)}
          toggleItemSelection={() => toggleItemSelection(item.id)}
          selected={item.isSelected}
        />
      </View>
    );
  };

  if (!items.length) {
    return (
      <View className='flex-1 bg-slate-200 justify-center items-center'>
        <WCText color='neutral-400' classNames='font-extralight'>
          Your cart is empty
        </WCText>
      </View>
    );
  }

  return (
    <View className='bg-slate-200 flex-1'>
      <FlatList
        data={items}
        renderItem={renderCartItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}-${item.color}-${item.size}` as string}
        contentContainerStyle={styles.contentContainer}
      />
      {items.length > 0 && (
        <View className='flex-row w-full bg-emerald-100 h-14 items-center justify-between pl-5 pr-5'>
          <WCText classNames='text-[18px] font-bold capitalize' color='secondary'>
            Total: {`${currency ?? 'Gbp'} ${getTotalAmount()}`}
          </WCText>
          <WCButton
            buttonText='Checkout'
            onPress={() => {}}
            buttonClassNames='text-white text-[14px] font-bold'
            wrapperClassNames='bg-primary w-1/4 h-8 justify-center items-center rounded-md'
          />
        </View>
      )}
    </View>
  );
};

// needs to add padding to the bottom of the ScrollView
// nativewind does not support contentContainerStyle
const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

export default CartScreen;
