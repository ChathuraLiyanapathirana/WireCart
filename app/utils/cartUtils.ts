import { ProductType } from 'types/appTypes';

import useCartStore from 'store/cartStore';
import useProductStore from 'store/productStore';

export interface CartItemWithProductData {
  name: string;
  mainImage: string;
  currency: string;
  newPrice: string;
  id: string;
  selectedColor: string;
  selectedSize: string;
  qty: number;
}

export const getCartItemsWithProductData = (): CartItemWithProductData[] => {
  const productStore = useProductStore.getState();
  const cartStore = useCartStore.getState();

  if (!productStore.data) {
    return [];
  }

  const cartItemsWithProductData = cartStore.items
    .map((cartItem) => {
      const productData = productStore?.data?.find(
        (product: ProductType) => product.id === cartItem.id
      );

      if (!productData) {
        return null;
      }

      return {
        name: productData.name,
        mainImage: productData.mainImage,
        currency: productData.currency,
        newPrice: productData.newPrice,
        id: productData.id,
        selectedColor: cartItem.color,
        selectedSize: cartItem.size,
        qty: cartItem.qty,
      };
    })
    .filter(Boolean);

  return cartItemsWithProductData as CartItemWithProductData[];
};
