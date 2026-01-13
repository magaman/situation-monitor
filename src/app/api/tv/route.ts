import { getTvStreams } from '@/lib/iptv';
import { NextResponse } from 'next/server';

export async function GET() {
  const streams = await getTvStreams();
  return NextResponse.json(streams);
}
