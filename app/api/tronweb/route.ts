import axios from "axios";
import { TransactionsData, TransferData } from "@/types";
import { NextResponse } from "next/server";

const TRONGRID_API = "https://api.trongrid.io";
const API_KEY = process.env.NEXT_PUBLIC_TRONGRID_API_KEY;
const walletAddress = process.env.NEXT_PUBLIC_WALLET_ADDRESS;

if (!API_KEY || !walletAddress) {
  console.error("Missing required environment variables");
}

const trongridApi = axios.create({
  baseURL: TRONGRID_API,
  headers: {
    "TRON-PRO-API-KEY": API_KEY,
  },
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    let data;
    try {
      if (type === "transfers") {
        data = await fetchTronTransfers();
      } else {
        data = await fetchTronTransactions();
      }
    } catch (fetchError: any) {
      console.error("Fetch error details:", {
        message: fetchError.message,
        response: fetchError.response?.data,
        status: fetchError.response?.status,
      });
      throw fetchError;
    }

    return NextResponse.json({ data });
  } catch (error: any) {
    console.error("API Error:", {
      message: error.message,
      response: error.response?.data,
    });
    return NextResponse.json(
      {
        error: "Failed to fetch TRON data",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

async function fetchTronTransactions(): Promise<TransactionsData[]> {
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
  } catch (error: any) {
    console.error("Error fetching transactions:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    throw error;
  }
}

async function fetchTronTransfers(): Promise<TransferData[]> {
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
  } catch (error: any) {
    console.error("Error fetching transfers:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    throw error;
  }
}
