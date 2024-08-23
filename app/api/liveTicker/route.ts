import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const liveKey = process.env.NEXT_PUBLIC_COIN_API_KEY;
  const url =
    "https://pro-api.coinmarketcap.com/v1/exchange/quotes/historical?id=1937";

  try {
    const response = await axios.get(url, {
      headers: {
        "X-CMC_PRO_API_KEY": liveKey as string,
      },
    });
    console.log(liveKey);

    const data = response.data;

    if (!data) {
      throw new Error("No data received");
    }

    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(
      "Error fetching crypto data:",
      (error as Error).message || error
    );
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
