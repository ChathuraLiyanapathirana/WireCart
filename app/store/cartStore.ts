import { create } from 'zustand';

import { CartItemType, CartItemWithProductDataType, ProductType } from 'types/appTypes';

import useProductStore from 'store/productStore';

export interface CartState {
  items: CartItemWithProductDataType[];
  addToCart: (newItem: CartItemType) => void;
  incrementQty: (id: string) => void;
  decrementQty: (id: string) => void;
  removeFromCart: (id: string) => void;
  toggleItemSelection: (id: string) => void;
  getSelectedItems: () => CartItemWithProductDataType[];
  getTotalAmount: () => string;
}

const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (newItem: CartItemType) => {
    const existingItemIndex = get().items.findIndex(
      (item) => item.id === newItem.id && item.color === newItem.color && item.size === newItem.size
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...get().items];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        qty: updatedItems[existingItemIndex].qty + newItem.qty,
      };
      set({ items: updatedItems });
    } else {
      const productStore = useProductStore.getState();
      const productData = productStore?.data?.find(
        (product: ProductType) => product.id === newItem.id
      );

      if (productData) {
        const newCartItemType: CartItemWithProductDataType = {
          ...newItem,
          name: productData.name,
          mainImage: productData.mainImage,
          currency: productData.currency as string,
          newPrice: productData.newPrice as string,
        };
        set({ items: [...get().items, newCartItemType] });
      }
    }
  },
  incrementQty: (id: string) =>
    set({
      items: get().items.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)),
    }),
  decrementQty: (id: string) =>
    set({
      items: get().items.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      ),
    }),
  removeFromCart: (id: string) => set({ items: get().items.filter((item) => item.id !== id) }),
  toggleItemSelection: (id: string) =>
    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      ),
    }),
  getSelectedItems: () => get().items.filter((item) => item.isSelected),
  getTotalAmount: () =>
    get()
      .getSelectedItems()
      .reduce((total, item) => total + parseFloat(item.newPrice) * item.qty, 0)
      .toFixed(2),
}));

export default useCartStore;
