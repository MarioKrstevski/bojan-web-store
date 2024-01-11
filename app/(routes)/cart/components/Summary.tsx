"use client";

import Button from "@/components/ui/Button";
import Currency from "@/components/ui/Currency";
import { storeId } from "@/global/variables";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

interface SummaryProps {}
export default function Summary({}: SummaryProps) {
  const items = useCart((state) => state.items);
  const removeAllItems = useCart((state) => state.removeAllItems);
  const searchParams = useSearchParams();

  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  async function onCheckout() {
    try {
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/checkout`,
        redirectUrl: `${window.location.origin}`,
        {
          productIds: items.map((product) => product.id),
        }
      );
      window.location = resp.data.url;
    } catch (error) {
      toast.error("Something went wrong with payment \n" + error);
    }
  }

  //effect description
  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment successful");
      removeAllItems();
    } else if (searchParams.get("canceled")) {
      toast.error("Something went wrong with payment");
    }
  }, [searchParams, removeAllItems]);
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 ">
      <h2 className="text-lg font-medium text-gray-900">
        Order summary
      </h2>
      <div className="mt-6 space-y-4 ">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">
            Order Total
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={items.length === 0}
        onClick={onCheckout}
        className="bg-black mt-6 w-full"
      >
        Checkout
      </Button>
    </div>
  );
}
