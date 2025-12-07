export interface Mcp {
  name: string;
  status: "connected" | "disconnected";
  endpoint: string;
  tokens: {
    current: number;
    max: number;
  };
}
