import { SuiClient } from '@mysten/sui/client';
import { Transaction } from '@mysten/sui/transactions';

export interface MemoryMetadata {
  title: string;
  description: string;
  timestamp: number;
  fileType: string;
  size: number;
}

export const suiClient = new SuiClient({
  url: process.env.NEXT_PUBLIC_TATUM_RPC || "https://sui-mainnet.gateway.tatum.io",
});

export function getSuiClient() {
  return suiClient;
}

export async function createMemoryTx(blobId: string, metadata: MemoryMetadata) {
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

export async function executeTransaction(tx: Transaction, signer: any) {
  const result = await suiClient.signAndExecuteTransaction({
    transaction: tx,
    signer,
  });
  return result;
}

export async function getTransactionStatus(digest: string) {
  return await suiClient.getTransactionBlock({ digest });
}