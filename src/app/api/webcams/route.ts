import { getNearbyWebcams } from '@/lib/windy';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  if (!lat || !lon) {
    return NextResponse.json({ error: 'lat and lon parameters are required' }, { status: 400 });
  }

  const webcams = await getNearbyWebcams(parseFloat(lat), parseFloat(lon));
  return NextResponse.json(webcams);
}
