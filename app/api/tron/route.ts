import { NextRequest } from "next/server";
import { TronWebSocketManager } from "@/lib/tron-websocket";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const trongridApiKey = process.env.NEXT_PUBLIC_TRONGRID_API_KEY;
  const tronscanApiKey = process.env.NEXT_PUBLIC_TRONSCAN_API_KEY;
  const address = process.env.NEXT_PUBLIC_WALLET_ADDRESS;

  if (!trongridApiKey || !address) {
    console.error(
      "Missing configuration: trongridApiKey or address is undefined."
    );
    return Response.json({ error: "Missing configuration" }, { status: 400 });
  }

  // Handle SSE for real-time updates
  if (request.headers.get("accept") === "text/event-stream") {
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();
    const encoder = new TextEncoder();

    const wsManager = TronWebSocketManager.getInstance(trongridApiKey);

    wsManager.addSubscriber(async (data) => {
      console.log("WebSocket received data:", data);
      await writer.write(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
    });

    return new Response(stream.readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  }

  // Handle historical data from TronScan
  try {
    // eslint-disable-next-line no-undef
    const headers: HeadersInit = {
      "TRON-PRO-API-KEY": tronscanApiKey || "",
    };

    const response = await fetch(
      `https://apilist.tronscanapi.com/api/transaction?sort=-timestamp&limit=20&address=${address}`,
      {
        headers,
        next: { revalidate: 30 }, // Cache for 30 seconds
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }

    const data = await response.json();
    // console.log("Fetched transaction data:", data);
    return Response.json(data);
  } catch (error) {
    // console.error("Error fetching transactions:", error);
    return Response.json(
      { error: "Failed to fetch transactions" },
      { status: 500 }
    );
  }
}
