// src/api/spotify/webapi/users.ts

import { TimeRange } from "@src/api/spotify/types/requests";
import { getAccessToken } from "../spotify";

/*
  https://developer.spotify.com/documentation/web-api/reference/get-current-users-profile
*/
export const getUserProfile = async (refresh_token): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  return fetch("https://api.spotify.com/v1/me", { headers });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  Get the current user’s top artists or tracks based on calculated affinity.
*/
export const getTopArtists = async (
  refresh_token,
  timeRange: TimeRange
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const time_range = timeRange ?? "medium_term";
  const params = "time_range=" + time_range + "&limit=" + 6;

  const url = `https://api.spotify.com/v1/me/top/artists?${params}`;

  return fetch(url, { headers });
};

export const getTopTracks = async (
  refresh_token,
  timeRange: TimeRange
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const time_range = timeRange ?? "medium_term";
  const params = "time_range=" + time_range + "&limit=" + 10;

  return fetch(`https://api.spotify.com/v1/me/top/tracks?${params}`, {
    headers,
  });
};
