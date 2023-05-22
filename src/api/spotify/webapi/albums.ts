// src/api/spotify/webapi/albums.js
import { getAccessToken } from "../spotify";
const refresh_token = null;

/*
  https://developer.spotify.com/documentation/web-api/reference/get-an-album
  Get Spotify catalog information for a single artist identified by their unique Spotify ID.
*/
export const getAlbum = async (id: string): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  return fetch(`https://api.spotify.com/v1/albums/${id}`, { headers });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/get-multiple-albums
  Get Spotify catalog information for several albums based on their Spotify IDs.
*/
export const getAlbums = async (ids: string[]): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const params = "ids=" + ids.join(",");

  return fetch(`https://api.spotify.com/v1/albums/${params}`, { headers });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/get-an-albums-tracks
  Get Spotify catalog information about an album's tracks.
*/
export const getAlbumsTracks = async (
  id: string,
  limit: number,
  offset: number
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const params = "limit=" + limit + "&offset=" + offset;

  return fetch(`https://api.spotify.com/v1/albums/${id}/tracks?${params}`, {
    headers,
  });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/get-users-saved-albums
  Get a list of the albums saved in the current Spotify user’s ‘Your Music’ library.
*/
export const getSavedAlbums = async (
  limit: number,
  offset: number
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const params = "limit=" + limit + "&offset=" + offset;

  return fetch(`https://api.spotify.com/v1/me/albums?${params}`, { headers });
};
