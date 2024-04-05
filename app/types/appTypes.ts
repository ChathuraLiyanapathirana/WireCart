export type PriceType = {
  amount: string;
  currency: string;
};

export type ProductType = {
  id: string;
  SKU: string;
  name: string;
  brandName: string;
  mainImage: string;
  price: PriceType;
  sizes: string[];
  stockStatus: string;
  colour: string;
  description: string;
  currency?: string;
  newPrice?: string;
  oldPrice?: string;
  percentage?: number;
};

export type CartItemType = {
  id: string;
  color: string;
  size: string;
  qty: number;
  isSelected: boolean;
};

export type CartItemWithProductDataType = CartItemType & {
  name: string;
  mainImage: string;
  currency: string;
  newPrice: string;
};
