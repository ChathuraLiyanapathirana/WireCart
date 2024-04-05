// WCCartModal.tsx
import React, { useEffect, useState } from 'react';
import { Modal, Platform, View } from 'react-native';

import Toast from 'react-native-simple-toast';
import Ionicons from 'react-native-vector-icons/Ionicons';

import useCartStore from 'store/cartStore';
import useModalStore from 'store/modalStore';

import { COLORS } from 'constants/colors';

import WCButton from './WCButton';
import WCCartItem from './WCCartItem';
import WCQtyToggler from './WCQtyToggler';
import WCText from './WCText';

const WCCartModal = () => {
  const { modalVisible, modalData } = useModalStore();
  const { addToCart } = useCartStore();

  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    if (modalVisible) {
      setQty(1);
      setSelectedColor('');
      setSelectedSize('');
    }
  }, [modalVisible]);

  const cartButtonPositionClassNames = Platform.select({
    ios: 'absolute bottom-8 left-0 right-0',
    android: 'absolute bottom-4 left-0 right-0',
  });

  const handleCloseModal = () => {
    useModalStore.getState().setModalVisible(false);
  };

  const handleAddToCart = () => {
    if (selectedColor && selectedSize) {
      addToCart({
        id: modalData?.id as string,
        color: selectedColor,
        size: selectedSize,
        qty,
        isSelected: false,
      });
      handleCloseModal();
      Toast.showWithGravity('Added to cart', Toast.SHORT, Toast.TOP, {
        backgroundColor: COLORS.primary,
      });
    }
  };

  const onIncrement = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const onDecrement = () => {
    setQty((prevQty) => (prevQty === 1 ? prevQty : prevQty - 1));
  };

  const onColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const onSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <Modal
      visible={modalVisible}
      animationType='fade'
      transparent={true}
      onRequestClose={handleCloseModal}
    >
      <View className='flex-1 bg-black/50 p-4 justify-end items-center'>
        <View className='bg-white -bottom-4 rounded-t-lg p-5 w-screen h-5/6'>
          <View className='flex-row justify-end items-center'>
            <Ionicons name='close' size={24} onPress={handleCloseModal} />
          </View>
          <WCCartItem
            name={modalData?.name}
            mainImage={modalData?.mainImage}
            newPrice={modalData?.newPrice}
            currency={modalData?.currency}
            brandName={modalData?.brandName}
          />
          <View className='border-b-[0.5px] border-slate-200 mt-4 mb-4' />
          <View className='flex-row justify-start items-center pl-2 pr-2'>
            <WCText fontWeight='normal' color='secondary' classNames='text-[16px] mr-4'>
              Color:
            </WCText>
            <WCButton
              buttonClassNames='capitalize'
              wrapperClassNames={`${
                selectedColor === modalData?.colour ? 'bg-lightGreen' : 'bg-slate-200'
              } rounded-lg p-1 pl-2 pr-2 `}
              buttonText={modalData?.colour as string}
              onPress={() => onColorSelect(modalData?.colour as string)}
            />
          </View>
          <View className='border-b-[0.5px] border-slate-200 mt-4 mb-4' />
          <View className='flex-row justify-start items-center pl-2 pr-2'>
            <WCText fontWeight='normal' color='secondary' classNames='text-[16px] mr-4'>
              Size:
            </WCText>
            {modalData?.sizes?.map((size) => (
              <WCButton
                key={size}
                buttonClassNames='capitalize'
                wrapperClassNames={`${
                  selectedSize === size ? 'bg-lightGreen' : 'bg-slate-200'
                } rounded-lg p-1 mr-3 w-10 items-center justify-center`}
                buttonText={size}
                onPress={() => onSizeSelect(size)}
              />
            ))}
          </View>
          <View className='border-b-[0.5px] border-slate-200 mt-4 mb-4' />
          <View className='flex-row justify-between items-center pl-2 pr-2'>
            <WCText fontWeight='normal' color='secondary' classNames='text-[16px]'>
              Quantity:
            </WCText>
            <WCQtyToggler onIncrement={onIncrement} onDecrement={onDecrement} qty={qty} />
          </View>
          <View className={`${cartButtonPositionClassNames} justify-center items-center pl-5 pr-5`}>
            <WCButton
              wrapperClassNames='h-14 w-full  bg-primary rounded-lg items-center justify-center'
              buttonClassNames='text-white font-semibold text-[14px]'
              buttonText='Add to Cart'
              onPress={handleAddToCart}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WCCartModal;
