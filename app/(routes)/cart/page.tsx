"use client";

import Container from "@/components/ui/Container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import CardItem from "./components/CardItem";
import Summary from "./components/Summary";

interface CartPageProps {
  params: {};
}
export default function CartPage({}: CartPageProps) {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  //effect description
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">
            Shopping Cart
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p>No products added to cart </p>
              )}
              <ul>
                {cart.items.map((product) => (
                  <CardItem key={product.id} product={product} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
}