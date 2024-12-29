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

    console.log("Request type:", type);
    console.log("Wallet address:", walletAddress);

    let data;
    try {
      if (type === "transfers") {
        console.log("Fetching transfers...");
        data = await fetchTronTransfers();
        console.log("Transfers data:", JSON.stringify(data, null, 2));
      } else {
        console.log("Fetching transactions...");
        data = await fetchTronTransactions();
        console.log("Transactions data:", JSON.stringify(data, null, 2));
      }
    } catch (fetchError: any) {
      console.error("Fetch error details:", {
        message: fetchError.message,
        response: fetchError.response?.data,
        status: fetchError.response?.status,
        stack: fetchError.stack,
      });
      throw fetchError;
    }

    console.log("Successfully processed data");
    return NextResponse.json({ data });
  } catch (error: any) {
    console.error("API Error:", {
      message: error.message,
      response: error.response?.data,
      stack: error.stack,
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
    console.log("Making request to fetch transactions...");
    const response = await trongridApi.get(
      `/v1/accounts/${walletAddress}/transactions`,
      {
        params: {
          limit: 50,
          only_confirmed: true,
        },
      }
    );
    console.log(
      "Raw transactions response:",
      JSON.stringify(response.data, null, 2)
    );

    const mappedData = response.data.data.map((tx: any) => ({
      ...tx,
      type: "transaction",
    }));
    console.log(
      "Mapped transactions data:",
      JSON.stringify(mappedData, null, 2)
    );

    return mappedData;
  } catch (error: any) {
    console.error("Error fetching transactions:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      stack: error.stack,
    });
    throw error;
  }
}

async function fetchTronTransfers(): Promise<TransferData[]> {
  try {
    console.log("Making request to fetch transfers...");
    const response = await trongridApi.get(
      `/v1/accounts/${walletAddress}/transactions/trc20`,
      {
        params: {
          limit: 50,
          only_confirmed: true,
        },
      }
    );
    console.log(
      "Raw transfers response:",
      JSON.stringify(response.data, null, 2)
    );

    const mappedData = response.data.data.map((transfer: any) => ({
      ...transfer,
      type: "transfer",
    }));
    console.log("Mapped transfers data:", JSON.stringify(mappedData, null, 2));

    return mappedData;
  } catch (error: any) {
    console.error("Error fetching transfers:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      stack: error.stack,
    });
    throw error;
  }
}
