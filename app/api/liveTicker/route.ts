import { NextResponse } from "next/server";
import axios from "axios";
import { CoinQuote } from "@/types";

export async function GET(request: Request) {
  const apiKey = process.env.COIN_API_KEY;

  // Get URL parameters
  // const { searchParams } = new URL(request.url);
  // const ids = searchParams.get("id");

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  const url =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";

  try {
    const response = await axios.get<CoinQuote>(url, {
      params: {
        id: ["825", "1958"].join(","),
      },
      headers: {
        "X-CMC_PRO_API_KEY": apiKey,
      },
    });

    const { data } = response;

    if (!data || !data.data) {
      throw new Error("Invalid response format");
    }

    return NextResponse.json(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status || 500;
      const message =
        error.response?.data?.status?.error_message || error.message;
      return NextResponse.json({ error: message }, { status: statusCode });
    }

    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
