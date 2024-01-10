import { storeId } from "@/global/variables";
import { Product } from "@/types";
import qs from "query-string";
const API_URL =
  process.env.NEXT_PUBLIC_API_URL + "/" + storeId + "/products";
interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}
const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: API_URL,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url);
  return res.json();
};

export default getProducts;
