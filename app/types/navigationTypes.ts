import { ProductType } from './appTypes';

export type HomeStackParamList = {
  HomeScreen: undefined;
  ProductScreen: { productData: ProductType };
};

export type CartStackParamList = {
  CartScreen: undefined;
};
