export const getRedditPosts = async (subreddit: string) => {
  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/new.json?limit=10`);
    const { data } = await response.json();
    return data.children.map((post: any) => post.data);
  } catch (error) {
    console.error(error);
    return [];
  }
};
