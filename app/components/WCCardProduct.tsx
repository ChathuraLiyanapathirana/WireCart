import React from 'react';
import { TouchableOpacity } from 'react-native';

import { ProductType } from 'types/appTypes';

import WCCardProductDetails from './WCCardProductDetails';
import WCCardProductMeta from './WCCardProductMeta';
import WCProductImage from './WCProductImage';

type WCCardProductProps = {
  product: ProductType;
  onPress: () => void;
};

const WCCardProduct = ({ product, onPress }: WCCardProductProps) => {
  return (
    <TouchableOpacity
      className='flex-grow min-h-40 bg-white m-2 rounded-lg shadow-sm shadow-slate-300'
      onPress={onPress}
    >
      <WCCardProductMeta
        stockStatus={product.stockStatus}
        brandName={product.brandName}
        discountPercentage={product.percentage}
      />
      <WCProductImage
        imageUrl={product.mainImage}
        wrapperClassNames='justify-center items-center bg-white rounded-t-lg h-20 relative'
        imageClassNames='w-24 h-16 rounded-lg'
      />
      <WCCardProductDetails
        name={product.name}
        currency={product.currency ?? 'Gbp'}
        newPrice={product?.newPrice ?? '0.00'}
        oldPrice={product?.oldPrice ?? '0.00'}
      />
    </TouchableOpacity>
  );
};

export default WCCardProduct;
