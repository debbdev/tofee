import { WebSocket } from "ws";
import { TronGridEvent } from "@/types";

export class TronWebSocketManager {
  // eslint-disable-next-line no-use-before-define
  private static instance: TronWebSocketManager;
  private ws: WebSocket | null = null;
  private subscribers = new Set<(data: TronGridEvent) => void>();
  private reconnectAttempts = 0;
  private readonly maxReconnectAttempts = 5;
  // eslint-disable-next-line no-undef
  private pingInterval: NodeJS.Timeout | null = null;
  private apiKey: string;

  private constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.connect();
  }

  static getInstance(apiKey: string): TronWebSocketManager {
    if (!TronWebSocketManager.instance) {
      TronWebSocketManager.instance = new TronWebSocketManager(apiKey);
    }
    return TronWebSocketManager.instance;
  }

  private connect() {
    this.ws = new WebSocket(
      `wss://api.trongrid.io/v1/stream?apikey=${this.apiKey}`
    );

    this.ws.on("open", () => {
      console.log("Connected to TronGrid WebSocket");
      this.reconnectAttempts = 0;
      this.setupPing();
      this.subscribe();
    });

    this.ws.on("message", this.handleMessage.bind(this));
    this.ws.on("close", this.handleClose.bind(this));
    this.ws.on("error", this.handleError.bind(this));
  }

  private handleMessage(data: Buffer) {
    try {
      const parsedData = JSON.parse(data.toString()) as TronGridEvent;
      this.notifySubscribers(parsedData);
    } catch (error) {
      console.error("Error parsing WebSocket message:", error);
    }
  }

  private handleClose() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 30000);
      setTimeout(() => this.connect(), delay);
    }
  }

  private handleError(error: Error) {
    console.error("WebSocket error:", error);
  }

  private setupPing() {
    if (this.pingInterval) clearInterval(this.pingInterval);
    this.pingInterval = setInterval(() => {
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.ws.ping();
      }
    }, 30000);
  }

  private subscribe() {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;

    const subscribeMessage = {
      type: "subscribe",
      topics: [
        {
          type: "transaction",
          confirmation: true,
        },
      ],
    };

    this.ws.send(JSON.stringify(subscribeMessage));
  }

  public addSubscriber(callback: (data: TronGridEvent) => void) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  private notifySubscribers(data: TronGridEvent) {
    this.subscribers.forEach((callback) => callback(data));
  }
}
