// src/api/spotify/webapi/tracks.js

import {
  SpotifyItemId,
  SpotifyItemIds,
  SpotifyRecommendationParameters,
  SpotifyGeneralRequestOptions,
} from "@src/api/spotify/types/requests";
import { getAccessToken } from "../spotify";
const refresh_token = null;

/*
  https://developer.spotify.com/documentation/web-api/reference/get-track
  Get Spotify catalog information for a single track identified by its unique Spotify ID.
*/
export const getTrack = async (id: SpotifyItemId): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  return fetch(`https://api.spotify.com/v1/tracks/${id}`, { headers });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/get-several-tracks
  Get Spotify catalog information for multiple tracks based on their Spotify IDs.
  ids: A comma-separated list of the Spotify IDs for the tracks. Maximum: 50 IDs.
*/
export const getSeveralTracks = async (
  ids: SpotifyItemIds
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const params = "ids=" + ids.join(",");

  return fetch(`https://api.spotify.com/v1/tracks?${params}`, { headers });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/get-users-saved-tracks
  Get a list of the songs saved in the current Spotify user’s ‘Your Music’ library.
*/
export const getUsersSavedTracks = async (
  options: SpotifyGeneralRequestOptions
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
    "&market=" +
    options.market;

  return fetch(`https://api.spotify.com/v1/me/tracks?${params}`, { headers });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/get-several-audio-features
  Get audio features for multiple tracks based on their Spotify IDs.
*/
export const getSeveralAudioFeatures = async (
  ids: SpotifyItemIds
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const params = "ids=" + ids.join(",");

  return fetch(`https://api.spotify.com/v1/audio-features?${params}`, {
    headers,
  });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/get-audio-features
  Get audio features for a single track identified by its unique Spotify ID.
*/
export const getAudioFeatures = async (
  id: SpotifyItemId
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  return fetch(`https://api.spotify.com/v1/audio-features/${id}`, { headers });
};

/*
  https://developer.spotify.com/documentation/web-api/reference/get-recommendations
  Recommendations are generated based on the available information for a given seed entity and matched against 
  similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will 
  be returned together with pool size details. For artists and tracks that are very new or obscure there might 
  not be enough data to generate a list of tracks. Up to 5 seed values may be provided in any combination of 
  seed_artists, seed_tracks and seed_genres.

  For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See 
  tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict 
  results to only those tracks with a tempo of greater than 140 beats per minute.
  
  limit: The target size of the list of recommended tracks.
  seed_artists: A comma-separated list of Spotify IDs for seed artists. 
  seed_genres: A comma-separated list of any genres in the set of available genre seeds.  
  seed_tracks: A comma-separated list of Spotify IDs for a seed track.
  min_acousticness: A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
  max_acousticness: A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
  target_acousticness: A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
  min_danceability: Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm 
        stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.
  max_danceability
  target_danceability
  min_duration_ms: The duration of the track in milliseconds.
  max_duration_ms
  target_duration_ms
  min_energy: Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast,
        loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to
        this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
  max_energy
  target_energy
  min_instrumentalness: Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context.
        Rap or spoken word tracks are clearly “vocal”. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no
        vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
  max_instrumentalness
  target_instrumentalness
  min_key: The key the track is in. Integers map to pitches using standard Pitch Class notation. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on.
  max_key
  target_key
  min_liveness: Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was
        performed live. A value above 0.8 provides strong likelihood that the track is live.
  max_liveness
  target_liveness
  min_loudness: The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing
        relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude).
        Values typical range between -60 and 0 db.
  max_loudness
  target_loudness
  min_mode: Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented
        by 1 and minor is 0.
  max_mode
  target_mode
  min_popularity: The popularity of the track. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated by
        algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.
  max_popularity
  target_popularity
  min_speechiness: Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio
        book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values
        between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music.
        Values below 0.33 most likely represent music and other non-speech-like tracks.
  max_speechiness
  target_speechiness
  min_tempo: The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and
        derives directly from the average beat duration.
  max_tempo
  target_tempo
  min_time_signature: An estimated overall time signature of a track. The time signature (meter) is a notational convention to specify how many beats
        are in each bar (or measure).
  max_time_signature
  target_time_signature
  min_valence: A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive
        (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
  max_valence
  target_valence
*/
export const getRecommendations = async (
  options: SpotifyRecommendationParameters
): Promise<Response> => {
  const { access_token } = await getAccessToken(refresh_token);
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const queryString = Object.keys(options)
    .map((key) => `${key}=${options[key]}`)
    .join("&");

  return fetch(`https://api.spotify.com/v1/recommendations?${queryString}`, {
    headers,
  });
};
