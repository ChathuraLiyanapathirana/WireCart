import React from 'react';

import WCProductMetaTag from './WCProductMetaTag';

type WCCardProductMetaProps = {
  stockStatus?: string;
  brandName?: string;
  discountPercentage?: number;
};

const WCCardProductMeta = ({
  stockStatus,
  brandName,
  discountPercentage,
}: WCCardProductMetaProps) => (
  <>
    {discountPercentage ? (
      <WCProductMetaTag
        wrapperClassNames='absolute left-0 -top-2 z-40 bg-red-400 rounded-tl-lg rounded-br-lg p-1 items-center justify-center'
        tagText={`-${discountPercentage}%`}
        tagClassNames='capitalize text-[10px] text-white font-semibold'
      />
    ) : null}
    {stockStatus ? (
      <WCProductMetaTag
        wrapperClassNames='absolute right-0 top-0 z-40 bg-lightGreen p-1 rounded-tr-lg rounded-bl-lg'
        tagText={stockStatus}
        tagClassNames='capitalize text-[10px] font-semibold'
      />
    ) : null}
    {brandName ? (
      <WCProductMetaTag
        wrapperClassNames='absolute right-0 top-6 z-40 bg-yellow-400 p-1 rounded-tl-lg rounded-bl-lg'
        tagText={brandName}
        tagClassNames='capitalize text-[10px] font-semibold'
      />
    ) : null}
  </>
);

export default WCCardProductMeta;
