// src/api/spotify/webapi/search.js

import { getAccessToken } from "../spotify";
import { SpotifySearchParameters } from "@src/api/spotify/types/requests";
const refresh_token = null;

/*
  https://developer.spotify.com/documentation/web-api/reference/search
  Get Spotify Catalog information about artists, albums, tracks or playlists that match a keyword string.
  q: Search query keywords and optional field filters and operators.
  type: A comma-separated list of item types to search across. Allowed values: "album", "artist", "playlist", "track", "show", "episode", "audiobook"
  limit: The maximum number of results to return. Default: 20. Minimum: 1. Maximum: 50.
  offset: The index of the first result to return. Default: 0 (the first result). Maximum offset (including limit): 2,000. 
  Use with limit to get the next page of search results.
  include_external: Optional. If include_external=audio is specified the response will include any relevant audio content that is hosted externally.
*/
export const searchForItem = async (
  options: SpotifySearchParameters
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const params =
    "q=" +
    options.q +
    "&type=" +
    options.type +
    "&market=" +
    options.market +
    "&limit=" +
    options.limit +
    "&offset=" +
    options.offset;

  return fetch(`https://api.spotify.com/v1/search?${params}`, { headers });
};
