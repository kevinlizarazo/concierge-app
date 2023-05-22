// src/api/spotify/webapi/player.js

import { getAccessToken } from "../spotify";
import {
  SpotifyUri,
  SpotifyPlayerRequestParameters,
} from "@src/api/spotify/types/requests";
const refresh_token = null;
/*
  https://developer.spotify.com/documentation/web-api/reference/get-recently-played
  Get tracks from the current user’s recently played tracks.
  limit: integer: The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
  after: integer: A Unix timestamp in milliseconds. Returns all items after (but not including) this cursor position. If after is specified, before must not be specified.
  before: integer: A Unix timestamp in milliseconds. Returns all items before (but not including) this cursor position. If before is specified, after must not be specified.
*/
export const getRecentlyPlayed = async (
  options: SpotifyPlayerRequestParameters
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const params =
    "limit=" +
    options.limit +
    "&after=" +
    options.after +
    "&before=" +
    options.before;

  return fetch(
    `https://api.spotify.com/v1/me/player/recently-played?${params}`,
    { headers }
  );
};

/*
  https://developer.spotify.com/documentation/web-api/reference/add-to-queue
  Add an item to the end of the user’s current playback queue.
  uri: string: A comma-separated list of Spotify URIs to add, can be track or episode URIs. A maximum of 100 items can be specified in one request.
*/
export const addToQueue = async (uri: SpotifyUri): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  return fetch(`https://api.spotify.com/v1/me/player/queue?uri=${uri}`, {
    headers,
    method: "POST",
  });
};
