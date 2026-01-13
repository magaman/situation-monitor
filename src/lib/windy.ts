const WINDY_API_KEY = process.env.WINDY_API_KEY;

export const getNearbyWebcams = async (latitude: number, longitude: number) => {
  if (!WINDY_API_KEY) {
    console.error('Windy API key is not configured.');
    return [];
  }

  try {
    const response = await fetch(`https://api.windy.com/api/webcams/v2/list/nearby=${latitude},${longitude},100?show=webcams:image,location`, {
      headers: {
        'x-windy-key': WINDY_API_KEY,
      },
    });
    const { result } = await response.json();
    return result.webcams;
  } catch (error) {
    console.error(error);
    return [];
  }
};
