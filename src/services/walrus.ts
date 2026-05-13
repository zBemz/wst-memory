import { walrusClient } from "@/infrastructure/walrus/client";

export interface UploadToWalrusOptions {
  epochs?: number;
  deletable?: boolean;
}

export interface UploadToWalrusResult {
  blobId: string;
  url: string;
  size: number;
  uploadedAt: string;
}

export async function uploadToWalrus(
  blob: Uint8Array,
  options?: UploadToWalrusOptions
): Promise<UploadToWalrusResult> {
  try {
    if (!blob || blob.length === 0) {
      throw new Error("Blob is empty.");
    }

    const result = await walrusClient.writeBlob({
      blob,
      deletable: options?.deletable ?? true,
      epochs: options?.epochs ?? 5,
    });

    return {
      blobId: result.blobId,
      url: `${
        process.env.NEXT_PUBLIC_WALRUS_AGGREGATOR ??
        "https://aggregator.walrus.mainnet.sui.io"
      }/v1/blobs/${result.blobId}`,
      size: blob.length,
      uploadedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Walrus upload failed:", error);

    throw new Error(
      error instanceof Error
        ? error.message
        : "Failed to upload to Walrus."
    );
  }
}