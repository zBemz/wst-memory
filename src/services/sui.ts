import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';
import { Transaction } from '@mysten/sui/transactions';

export const suiClient = new SuiClient({
  url: process.env.NEXT_PUBLIC_TATUM_RPC || getFullnodeUrl('mainnet'),
});

export async function createMemoryTx(blobId: string, metadata: any, address: string) {
  const tx = new Transaction();
  // Thay bằng packageId thật sau khi deploy Move contract
  tx.moveCall({
    target: `0xYOUR_PACKAGE_ID::wst_memory::store_memory`,
    arguments: [
      tx.pure.string(blobId),
      tx.pure.string(JSON.stringify(metadata)),
      tx.pure.address(address),
    ],
  });
  return tx;
}