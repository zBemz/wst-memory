import { TatumSDK, Network } from '@tatumio/tatum';

const TATUM_API_KEY = process.env.NEXT_PUBLIC_TATUM_API_KEY!;

export const tatumSui = await TatumSDK.init({
  network: Network.SUI_MAINNET,
  apiKey: TATUM_API_KEY,
});