import { storeId } from "@/global/variables";
import { Product } from "@/types";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL + "/" + storeId + "/products";
const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(API_URL + "/" + id);

  return res.json();
};

export default getProduct;
