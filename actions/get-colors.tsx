import { storeId } from "@/global/variables";
import { Color } from "@/types";
const API_URL =
  process.env.NEXT_PUBLIC_API_URL + "/" + storeId + "/colors";
const getColors = async (): Promise<Color[]> => {
  const res = await fetch(API_URL);

  return res.json();
};

export default getColors;
