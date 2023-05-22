// src/api/spotify/webapi/markets.js

import { getAccessToken } from "../spotify";
const refresh_token = null;
/*
  https://developer.spotify.com/documentation/web-api/reference/get-available-markets
  Get the list of markets where Spotify is available.
*/
export const getAvailableMarkets = async (): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  return fetch(`https://api.spotify.com/v1/markets`, { headers });
};
