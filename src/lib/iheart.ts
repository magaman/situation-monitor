import * as cheerio from 'cheerio';

export const getIHeartRadioStreamUrl = async (url: string) => {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const script = $('#initialState').html();

    if (!script) {
      throw new Error('Could not find initial state script');
    }

    const initialState = JSON.parse(script);
    const stations = initialState.live.stations;
    const stationKey = Object.keys(stations)[0];
    const streams = stations[stationKey].streams;

    if (streams.secure_shoutcast_stream) {
      return streams.secure_shoutcast_stream;
    }

    if (streams.shoutcast_stream) {
      return streams.shoutcast_stream;
    }

    if (streams.secure_pls_stream) {
      return streams.secure_pls_stream;
    }

    if (streams.pls_stream) {
      return streams.pls_stream;
    }

    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
