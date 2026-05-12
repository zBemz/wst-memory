import { SuiClient } from "@mysten/sui/client";

export const suiClient = new SuiClient({
  url:
    process.env.NEXT_PUBLIC_TATUM_RPC ||
    "https://sui-mainnet.gateway.tatum.io",
});