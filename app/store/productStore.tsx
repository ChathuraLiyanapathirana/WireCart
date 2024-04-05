import { create } from 'zustand';

import { ProductType } from 'types/appTypes';

import { PRODUCT_URL } from 'constants/appConst';
import { getMockedOldPriceAndPercentage } from 'utils/index';

interface State {
  data: ProductType[] | null;
  error: string | null;
  isLoading: boolean;
  fetchData: () => void;
}

const useProductStore = create<State>((set) => ({
  data: null,
  error: null,
  isLoading: false,
  fetchData: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(PRODUCT_URL);
      const responseJson = await response.json();
      set({
        data: responseJson.data.map((product: ProductType) => {
          const { currency, newPrice, oldPrice, percentage } = getMockedOldPriceAndPercentage(
            product.price
          );
          return { ...product, currency, newPrice, oldPrice, percentage };
        }),
        isLoading: false,
      });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useProductStore;
