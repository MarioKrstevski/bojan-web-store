import { storeId } from "@/global/variables";
import { Category } from "@/types";
const API_URL =
  process.env.NEXT_PUBLIC_API_URL + "/" + storeId + "/categories";
const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(API_URL);

  return res.json();
};

export default getCategories;
