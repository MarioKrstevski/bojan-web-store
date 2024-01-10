"use client";
import { Product } from "@/types";
import Currency from "@/components/ui/Currency";
import Button from "./ui/Button";
import { ShoppingCartIcon } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  product: Product;
}
export default function Info({ product }: InfoProps) {
  const cart = useCart();
  return (
    <div>
      <h1 className="font-bold text-3xl text-gray-900">
        {product.name}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={product.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4 ">
          <h3 className="font-semibold text-black"> Size:</h3>
          <div>{product?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4 ">
          <h3 className="font-semibold text-black"> Color:</h3>
          <div>{product?.color?.name}</div>
          <div
            className="h-6 w-6 rounded-full border border-gray-600 "
            style={{ backgroundColor: product?.color?.value }}
          ></div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={() => cart.addItem(product)}
          className="flex items-center gap-x-2 bg-black text-white"
        >
          Add to Cart <ShoppingCartIcon />
        </Button>
      </div>
    </div>
  );
}
