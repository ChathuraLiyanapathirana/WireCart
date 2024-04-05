import React from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HomeStackParamList } from 'types/navigationTypes';

import WCButton from 'components/WCButton';
import WCProductImage from 'components/WCProductImage';
import WCProductMetaTag from 'components/WCProductMetaTag';
import WCProductPricing from 'components/WCProductPricing';
import WCText from 'components/WCText';

import useModalStore from 'store/modalStore';

const ProductScreen: React.FC<NativeStackScreenProps<HomeStackParamList, 'ProductScreen'>> = ({
  route,
}) => {
  const productData = route.params.productData;
  const { setModalVisible, setModalData } = useModalStore();

  const handleAddToCart = () => {
    setModalVisible(true);
    setModalData(productData);
  };

  const bottomButtonPositionClassNames = Platform.select({
    ios: 'pb-8',
    android: 'pb-3',
  });

  return (
    <>
      <View className='flex-1 bg-slate-200'>
        <ScrollView
          className='flex-1 bg-slate-200 pl-5 pr-5 pt-8'
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        >
          <WCProductImage
            imageUrl={productData.mainImage}
            wrapperClassNames='justify-center items-center p-4 bg-white rounded-lg'
            imageClassNames='w-full h-72'
          />
          <WCProductMetaTag
            wrapperClassNames='absolute left-0 -top-4 z-40 bg-red-400 rounded-tl-lg rounded-br-lg p-2 items-center justify-center'
            tagText={`-${productData?.percentage}%`}
            tagClassNames='capitalize text-[14px] text-white font-semibold'
          />
          <View className='rounded-lg shadow-md bg-emerald-50 top-8 p-3'>
            <View className='flex-row justify-between items-center'>
              <WCProductPricing
                currency={productData?.currency}
                newPrice={productData?.newPrice}
                oldPrice={productData?.oldPrice}
                wrapperClassNames='flex-row items-baseline'
                currencyClassNames='text-[12px] capitalize text-secondary'
                newPriceClassNames='text-[24px] capitalize text-secondary'
                oldPriceClassNames='line-through text-slate-400 text-[12px] capitalize'
              />
              <WCProductMetaTag
                wrapperClassNames='absolute -right-0 h-6 -top-9 bg-primary rounded-tl-lg rounded-tr-lg pl-2 pr-2 items-center justify-center'
                tagText={`${productData.stockStatus}: ${productData.SKU} Units`}
                tagClassNames='capitalize text-[10px] text-white font-semibold'
              />
            </View>

            <WCText
              fontWeight='semibold'
              color='secondary'
              classNames='capitalize text-[16px] mt-2'
            >
              {productData.name}
            </WCText>

            <View className='flex-row items-center mt-2'>
              <WCText
                fontWeight='semibold'
                color='secondary'
                classNames='capitalize text-[12px] mr-2'
              >
                Tags:
              </WCText>
              <WCProductMetaTag
                wrapperClassNames='bg-slate-300 rounded-lg p-1 items-center justify-center mr-2'
                tagText={productData.colour}
                tagClassNames='capitalize text-[10px] text-secondary font-normal'
              />
              <WCProductMetaTag
                wrapperClassNames='bg-slate-300 rounded-lg p-1 items-center justify-center mr-2'
                tagText={productData.brandName}
                tagClassNames='capitalize text-[10px] text-secondary font-normal'
              />
            </View>

            <WCText
              fontWeight='normal'
              color='secondary'
              classNames='capitalize text-[14px] mt-2 tracking-wide leading-5'
            >
              {productData.description}
            </WCText>
          </View>
        </ScrollView>

        <View
          className={`${bottomButtonPositionClassNames} pt-3 flex-row items-center justify-evenly bg-white rounded-t-2xl shadow-lg`}
        >
          <WCButton
            wrapperClassNames='h-14 w-40 border-primary border-[2px] rounded-lg items-center justify-center'
            buttonClassNames='text-primary font-semibold text-[14px]'
            buttonText='Buy Now'
            onPress={() => console.log('Buy Now')}
          />
          <WCButton
            wrapperClassNames='h-14 w-40 bg-primary rounded-lg items-center justify-center'
            buttonClassNames='text-white font-semibold text-[14px]'
            buttonText='Add to Cart'
            onPress={handleAddToCart}
          />
        </View>
      </View>
    </>
  );
};

// needs to add padding to the bottom of the ScrollView
// nativewind does not support contentContainerStyle
const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 80,
  },
});

export default ProductScreen;
