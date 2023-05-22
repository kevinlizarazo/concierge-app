// src/api/spotify/webapi/genres.js

import { getAccessToken } from "../spotify";

const refresh_token = null;
/*
  https://developer.spotify.com/documentation/web-api/reference/get-recommendation-genres
  Retrieve a list of available genres seed parameter values for recommendations.
*/
export const getRecommendationGenres = async (): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  return fetch(
    `https://api.spotify.com/v1/recommendations/available-genre-seeds`,
    { headers }
  );
};
