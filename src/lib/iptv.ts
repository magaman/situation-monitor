export const getTvStreams = async () => {
  try {
    const response = await fetch('https://iptv-org.github.io/api/streams.json');
    const streams = await response.json();
    return streams;
  } catch (error) {
    console.error(error);
    return [];
  }
};
