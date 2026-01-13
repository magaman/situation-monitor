import { getRedditPosts } from '@/lib/reddit';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const subreddit = searchParams.get('subreddit');

  if (!subreddit) {
    return NextResponse.json({ error: 'Subreddit parameter is required' }, { status: 400 });
  }

  const posts = await getRedditPosts(subreddit);
  return NextResponse.json(posts);
}
