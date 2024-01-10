import { storeId } from "@/global/variables";
import { Store } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const getStore = async (): Promise<Store> => {
  const res = await fetch(API_URL + "/stores/" + storeId);
  console.log("res", res);
  return res.json();
};

export default getStore;
