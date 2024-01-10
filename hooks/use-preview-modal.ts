import { create } from "zustand";
import { Product } from "@/types";

interface PreviewModalStore {
  isOpen: boolean;
  product?: Product;
  onOpen: (product: Product) => void;
  onClose: () => void;
}
const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  product: undefined,
  onOpen: (product: Product) => set({ isOpen: true, product }),
  onClose: () => set({ isOpen: false, product: undefined }),
}));

export default usePreviewModal;
