import { create } from 'zustand';

import { ProductType } from 'types/appTypes';

interface ModalState {
  modalVisible: boolean;
  modalData: ProductType | null;
  setModalVisible: (visible: boolean) => void;
  setModalData: (data: any) => void;
}

const useModalStore = create<ModalState>((set) => ({
  modalVisible: false,
  modalData: null,
  setModalVisible: (visible: boolean) => set({ modalVisible: visible }),
  setModalData: (data: any) => set({ modalData: data }),
}));

export default useModalStore;
