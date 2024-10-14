import { NextResponse } from "next/server";
import { TransactionsData, TransferData } from "@/types";

interface ApiResponse {
  data: TransactionsData[] | TransferData[];
}

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_WALLET_API_KEY;
  const address = process.env.NEXT_PUBLIC_WALLET_ADDRESS;

  if (!apiKey) {
    console.error("API key is missing");
    return NextResponse.json({ error: "API key is missing" }, { status: 400 });
  }

  const timestamp = new Date().getTime();

  const transactionsUrl = `https://apilist.tronscanapi.com/api/transaction?sort=-timestamp&count=true&limit=5&start=0&address=${address}&_=${timestamp}`;
  const transfersUrl = `https://apilist.tronscanapi.com/api/transfer?sort=-timestamp&count=true&limit=5&start=0&token=_&address=${address}&_=${timestamp}`;

  try {
    const [transactionsResponse, transfersResponse] = await Promise.all([
      fetch(transactionsUrl, {
        method: "GET",
        headers: {
          "TRON-PRO-API-KEY": apiKey,
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      }),
      fetch(transfersUrl, {
        method: "GET",
        headers: {
          "TRON-PRO-API-KEY": apiKey,
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      }),
    ]);

    if (!transactionsResponse.ok) {
      throw new Error(
        `Failed to fetch transactions: ${transactionsResponse.statusText}`
      );
    }
    if (!transfersResponse.ok) {
      throw new Error(
        `Failed to fetch transfers: ${transfersResponse.statusText}`
      );
    }

    const transactionsData: ApiResponse = await transactionsResponse.json();
    const transfersData: ApiResponse = await transfersResponse.json();

    return NextResponse.json(
      {
        transactions: transactionsData.data as TransactionsData[],
        transfers: transfersData.data as TransferData[],
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Error fetching data", details: (error as Error).message },
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
