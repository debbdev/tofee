import { NextResponse } from "next/server";

export async function GET() {
  const liveKey = process.env.NEXT_PUBLIC_COIN_API_KEY;
  const url =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": liveKey as string,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
