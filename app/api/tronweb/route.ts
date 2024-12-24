import axios from "axios";
import { TransactionsData, TransferData } from "@/types";

const TRONGRID_API = "https://api.trongrid.io";
const API_KEY = process.env.NEXT_PUBLIC_TRONGRID_API_KEY;
const walletAddress = process.env.NEXT_PUBLIC_WALLET_ADDRESS;

if (!API_KEY) {
  console.error("TRONGRID API KEY is not set in environment variables");
}

const trongridApi = axios.create({
  baseURL: TRONGRID_API,
  headers: {
    "TRON-PRO-API-KEY": API_KEY,
  },
});

export async function fetchTronTransactions(
  address: string
): Promise<TransactionsData[]> {
  try {
    const response = await trongridApi.get(
      `/v1/accounts/${walletAddress}/transactions`,
      {
        params: {
          limit: 50,
          only_confirmed: true,
        },
      }
    );
    return response.data.data.map((tx: any) => ({
      ...tx,
      type: "transaction",
    }));
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
}

export async function fetchTronTransfers(
  address: string
): Promise<TransferData[]> {
  try {
    const response = await trongridApi.get(
      `/v1/accounts/${walletAddress}/transactions/trc20`,
      {
        params: {
          limit: 50,
          only_confirmed: true,
        },
      }
    );
    return response.data.data.map((transfer: any) => ({
      ...transfer,
      type: "transfer",
    }));
  } catch (error) {
    console.error("Error fetching transfers:", error);
    throw error;
  }
}
