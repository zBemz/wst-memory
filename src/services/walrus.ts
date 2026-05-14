import { WalrusClient } from '@mysten/walrus';

export const walrusClient = new WalrusClient({
  aggregatorUrl: process.env.NEXT_PUBLIC_WALRUS_AGGREGATOR!,
  publisherUrl: 'https://publisher.walrus.mainnet.sui.io',
});

export async function uploadToWalrus(blob: Uint8Array, epochs = 5) {
  try {
    const result = await walrusClient.writeBlob({ blob, deletable: true, epochs });
    return {
      blobId: result.blobId,
      url: `https://aggregator.walrus.mainnet.sui.io/v1/blobs/${result.blobId}`,
    };
  } catch (e) {
    console.error("Walrus upload failed", e);
    throw e;
  }
}