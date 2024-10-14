import { NextResponse } from "next/server";
import { TransactionsData, TransferData } from "@/types";
import Redis from "ioredis"; // Using Redis for SETNX

const redis = new Redis();

interface ApiResponse {
  data: TransactionsData[] | TransferData[];
}

async function fetchTransactions(
  address: string,
  apiKey: string,
  start: number
) {
  const transactionsUrl = `https://apilist.tronscanapi.com/api/transaction?sort=-timestamp&count=true&limit=5&start=${start}&address=${address}`;
  const transfersUrl = `https://apilist.tronscanapi.com/api/transfer?sort=-timestamp&count=true&limit=5&start=${start}&token=_&address=${address}`;

  const [transactionsResponse, transfersResponse] = await Promise.all([
    fetch(transactionsUrl, {
      method: "GET",
      headers: { "TRON-PRO-API-KEY": apiKey },
    }),
    fetch(transfersUrl, {
      method: "GET",
      headers: { "TRON-PRO-API-KEY": apiKey },
    }),
  ]);

  if (!transactionsResponse.ok || !transfersResponse.ok) {
    throw new Error("Failed to fetch transactions or transfers");
  }

  const transactionsData: ApiResponse = await transactionsResponse.json();
  const transfersData: ApiResponse = await transfersResponse.json();

  return { transactions: transactionsData.data, transfers: transfersData.data };
}

async function getNewBlocks(apiKey: string, address: string) {
  const lastProcessedBlock = await redis.get("last_processed_block");
  const newBlockNumber = parseInt(lastProcessedBlock || "0") + 1;

  const result = await fetchTransactions(address, apiKey, newBlockNumber);

  await redis.set("last_processed_block", newBlockNumber);

  return result;
}

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_WALLET_API_KEY;
  const address = process.env.NEXT_PUBLIC_WALLET_ADDRESS;

  if (!apiKey || !address) {
    return NextResponse.json(
      { error: "API key or address missing" },
      { status: 400 }
    );
  }

  try {
    const data = await getNewBlocks(apiKey, address);
    return NextResponse.json(data, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Error fetching data", details: (error as Error).message },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
