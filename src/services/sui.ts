import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';
import { Transaction } from '@mysten/sui/transactions';

export const suiClient = new SuiClient({ url: getFullnodeUrl('mainnet') });

export async function createMemoryTx(blobId: string, metadata: any) {
  const tx = new Transaction();
  // Sau này thay bằng packageId Move contract thật của bạn
  // Hiện tại dùng để demo
  tx.moveCall({
    target: `0xYOUR_PACKAGE_ID::wst_memory::store`,
    arguments: [
      tx.pure.string(blobId),
      tx.pure.string(JSON.stringify(metadata)),
    ],
  });
  return tx;
}