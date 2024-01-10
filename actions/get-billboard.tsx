import { storeId } from "@/global/variables";
import { Billboard } from "@/types";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL + "/" + storeId + "/billboards";
const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(API_URL + "/" + id);

  return res.json();
};

export default getBillboard;
