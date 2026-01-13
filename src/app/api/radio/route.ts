import { getIHeartRadioStreamUrl } from '@/lib/iheart';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'url parameter is required' }, { status: 400 });
  }

  const streamUrl = await getIHeartRadioStreamUrl(url);
  return NextResponse.json({ streamUrl });
}
