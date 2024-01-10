import { create } from "zustand";
import { Product } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";
import { storeId } from "@/global/variables";

interface CartStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  removeAllItems: () => void;
}
const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (product: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.id === product.id
        );
        if (existingItem) {
          toast.warning("Item is alredy in cart");
          return;
        }

        set({ items: [...currentItems, product] });
        toast.success("Item added to cart");
      },
      removeItem: (id: string) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        });
        toast.success("Item removed from cart");
      },
      removeAllItems: () => set({ items: [] }),
    }),
    {
      name: "cart-storage-" + storeId,
      storage: createJSONStorage(() => window.localStorage),
    }
  )
);

export default useCart;
