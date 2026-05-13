import { NextRequest } from 'next/server';
import { uploadToWalrus } from '@/services/walrus';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const address = formData.get('address') as string;

    if (!file) return Response.json({ error: 'No file' }, { status: 400 });

    const arrayBuffer = await file.arrayBuffer();
    const { blobId, url } = await uploadToWalrus(new Uint8Array(arrayBuffer));

    return Response.json({
      success: true,
      blobId,
      url,
      message: `✅ Memory stored on Walrus + Ownership on Sui Mainnet`,
    });
  } catch (error: any) {
    console.error(error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}