// src/api/spotify/webapi/playlists.js

import { getAccessToken } from "../spotify";
import {
  SpotifyItemId,
  SpotifyPlaylistRequestBody,
  SpotifyPlaylistRequestParameters,
  SpotifyUpdatePlaylistRequestBody,
  SpotifyAddToPlaylistRequestBody,
  SpotifyRemovePlaylistItemsRequestBody,
  SpotifyGeneralRequestOptions,
} from "@src/api/spotify/types/requests";
const refresh_token = null;

/*
  https://developer.spotify.com/documentation/web-api/reference/get-playlist
  Get a playlist owned by a Spotify user.
*/
export const getPlaylist = async (id: SpotifyItemId): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  return fetch(`https://api.spotify.com/v1/playlists/${id}`, { headers });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/change-playlist-details
  Change a playlist’s name and public/private state. (The user must, of course, own the playlist.)
*/
export const changePlaylistDetails = async (
  id: SpotifyItemId,
  options: SpotifyPlaylistRequestBody
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const body = {
    name: options.name,
    public: options.public,
    collaborative: options.collaborative,
    description: options.description,
  };

  return fetch(`https://api.spotify.com/v1/playlists/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/get-playlists-tracks
  Get full details of the tracks of a playlist owned by a Spotify user.
*/
export const getPlaylistTracks = async (
  id: SpotifyItemId,
  options: SpotifyPlaylistRequestParameters
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const params =
    "limit=" +
    options.limit +
    "&offset=" +
    options.offset +
    "&fields=" +
    options.fields +
    "&market=" +
    options.market;

  return fetch(`https://api.spotify.com/v1/playlists/${id}/tracks?${params}`, {
    headers,
  });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/reorder-or-replace-playlists-tracks
  Replace all the tracks in a playlist, overwriting its existing tracks. 
  This powerful request can be useful for replacing tracks, re-ordering existing tracks, or clearing the playlist.
  To reorder items, include range_start, insert_before, range_length and snapshot_id in the request's body. 
  To replace items, include uris as either a query parameter or in the request's body. 
  Replacing items in a playlist will overwrite its existing items.
*/
export const updatePlaylistTracks = async (
  id: SpotifyItemId,
  options: SpotifyUpdatePlaylistRequestBody
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const body = {
    uris: options.uris,
    range_start: options.range_start,
    insert_before: options.insert_before,
    range_length: options.range_length,
    snapshot_id: options.snapshot_id,
  };

  return fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/add-tracks-to-playlist
  Add one or more tracks to a user’s playlist.
  uris: array of Spotify URIs to add, can be track or episode URIs. A maximum of 100 items can be added in one request.
  For example: {"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}
*/
export const addTracksToPlaylist = async (
  id: SpotifyItemId,
  options: SpotifyAddToPlaylistRequestBody
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const body = {
    uris: options.uris,
    position: options.position,
  };

  return fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/remove-tracks-playlist
  Remove one or more tracks from a user’s playlist.
  tracks: array of objects containing Spotify URIs of the tracks or episodes to remove.
  For example: {"tracks":[{"uri":"spotify:track:4iV5W9uYEdYUVa79Axb7Rh","positions":[0]}]}
*/
export const removeTracksFromPlaylist = async (
  id: string,
  options: SpotifyRemovePlaylistItemsRequestBody
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const body = {
    tracks: options.tracks,
    snapshot_id: options.snapshot_id,
  };

  return fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
    method: "DELETE",
    headers,
    body: JSON.stringify(body),
  });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/get-a-list-of-current-users-playlists
  Get a list of the playlists owned or followed by the current Spotify user.
*/
export const getCurrentUserPlaylists = async (
  options: SpotifyGeneralRequestOptions
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const params = "limit=" + options.limit + "&offset=" + options.offset;

  return fetch(`https://api.spotify.com/v1/me/playlists?${params}`, {
    headers,
  });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/create-playlist
  Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.)
*/
export const createPlaylist = async (
  id: SpotifyItemId,
  options: SpotifyPlaylistRequestBody
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const body = {
    name: options.name,
    public: options.public,
    collaborative: options.collaborative,
    description: options.description,
  };

  return fetch(`https://api.spotify.com/v1/users/${id}/playlists`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/get-playlist-cover
  Get the current image associated with a specific playlist.
*/
export const getPlaylistCover = async (id: string): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  return fetch(`https://api.spotify.com/v1/playlists/${id}/images`, {
    headers,
  });
};
