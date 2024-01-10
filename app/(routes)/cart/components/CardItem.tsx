import Currency from "@/components/ui/Currency";
import IconButton from "@/components/ui/IconButton";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { XIcon } from "lucide-react";
import Image from "next/image";

interface CardItemProps {
  product: Product;
}
export default function CardItem({ product }: CardItemProps) {
  const cart = useCart();
  function handleOnRemove() {
    cart.removeItem(product.id);
  }
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={product.images[0].url}
          className="object-cover object-center"
          alt="Product Image"
        />
      </div>
      <div className=" relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 top-0 right-0">
          <IconButton
            onClick={handleOnRemove}
            icon={<XIcon size={15} />}
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className=" flex justify-between ">
            <p className="text-sm font-semibold text-gray-900">
              {product.name}
            </p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className=" text-gray-900">{product.color.name}</p>
            <p className=" text-gray-900 ml-4 border-l border-gray-200 pl-4">
              {product.size.name}
            </p>
          </div>
          <Currency value={product.price} />
        </div>
      </div>
    </li>
  );
}
