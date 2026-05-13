import { WalrusClient } from '@mysten/walrus';

export const walrusClient = new WalrusClient({
  aggregatorUrl: 'https://aggregator.walrus.mainnet.sui.io',
  publisherUrl: 'https://publisher.walrus.mainnet.sui.io',
});

export async function uploadToWalrus(blob: Uint8Array, epochs: number = 5) {
  const result = await walrusClient.writeBlob({
    blob,
    deletable: true,
    epochs,
  });

  return {
    blobId: result.blobId,
    url: `https://aggregator.walrus.mainnet.sui.io/v1/blobs/${result.blobId}`,
  };
}