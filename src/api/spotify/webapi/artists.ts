// src/api/spotify/webapi/artists.js
import { getAccessToken } from "../spotify";
import {
  SpotifyItemId,
  SpotifyItemIds,
  SpotifyArtistRequestParameters,
} from "@src/api/spotify/types/requests";
const refresh_token = null;

/*
  https://developer.spotify.com/documentation/web-api/reference/get-an-artist
  Get Spotify catalog information for a single artist identified by their unique Spotify ID.
*/
export const getArtist = async (id: SpotifyItemId): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  return fetch(`https://api.spotify.com/v1/artists/${id}`, { headers });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/get-multiple-artists
  Get Spotify catalog information for several artists based on their Spotify IDs.
*/
export const getArtists = async (ids: SpotifyItemIds): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const params = "ids=" + ids.join(",");

  return fetch(`https://api.spotify.com/v1/artists${params}`, { headers });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/get-an-artists-albums
  Get Spotify catalog information about an artist's albums.
*/
export const getArtistsAlbums = async (
  id: SpotifyItemId,
  options: SpotifyArtistRequestParameters
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const params =
    "include_groups=" +
    options.include_groups +
    "&market=" +
    options.market +
    "&limit=" +
    options.limit +
    "&offset=" +
    options.offset;

  return fetch(`https://api.spotify.com/v1/artists/${id}/albums?${params}`, {
    headers,
  });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/get-an-artists-top-tracks
  Get Spotify catalog information about an artist's top tracks by country.
  Market: An ISO 3166-1 alpha-2 country code; see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
  If neither market or user country are provided, the response will be invalid.
  If market and country are provided, the market will be used.
*/
export const getArtistsTopTracks = async (
  id: SpotifyItemId
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  return fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks`, {
    headers,
  });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/get-an-artists-related-artists
  Get Spotify catalog information about artists similar to a given artist.
*/
export const getArtistsRelatedArtists = async (
  id: SpotifyItemId
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  return fetch(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
    headers,
  });
};
