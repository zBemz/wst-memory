import { TatumSDK, Network } from '@tatumio/tatum';

let tatumInstance: any = null;

export const getTatumSui = async () => {
  if (!tatumInstance) {
    tatumInstance = await TatumSDK.init({
      network: Network.SUI_MAINNET,
      apiKey: process.env.NEXT_PUBLIC_TATUM_API_KEY!,
    });
  }
  return tatumInstance;
};