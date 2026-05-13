import {
  TatumSDK,
  Network,
} from "@tatumio/tatum";

let tatumInstance: any = null;

export const getTatumSui =
  async () => {
    if (!tatumInstance) {
      const apiKey =
        process.env.TATUM_API_KEY;

      if (!apiKey) {
        throw new Error(
          "❌ Missing TATUM_API_KEY",
        );
      }

      tatumInstance =
        await TatumSDK.init({
          network:
            Network.SUI_MAINNET,

          apiKey,
        });
    }

    return tatumInstance;
  };