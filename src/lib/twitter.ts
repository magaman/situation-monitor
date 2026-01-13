import { TwitterApi } from 'twitter-api-v2';

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY!,
  appSecret: process.env.TWITTER_API_SECRET!,
});

export const getTweets = async (query: string) => {
  try {
    const readOnlyClient = await client.appLogin();
    const { data: tweets } = await readOnlyClient.v2.search(query, {
      'tweet.fields': ['created_at', 'geo'],
    });
    return tweets;
  } catch (error) {
    console.error(error);
    return [];
  }
};
