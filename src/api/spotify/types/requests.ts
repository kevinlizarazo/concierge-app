export type TimeRange = "short_term" | "medium_term" | "long_term"
export type SearchType = "album" | "artist" | "playlist" | "track"
export type IncludeGroups = "album" | "single" | "appears_on" | "compilation"
export type SpotifyItemId = string
export type SpotifyItemIds = SpotifyItemId[]
export type SpotifyUri = string
export type SpotifyUris = SpotifyUri[]
export type SpotifyLimit = number
export type SpotifyOffset = number
export type SpotifyMarket = string

export interface SpotifyGeneralRequestOptions {
  limit?: SpotifyLimit,
  offset?: SpotifyOffset,
  market?: SpotifyMarket
}

export interface SpotifyAlbumRequestParameters {
  market?: SpotifyMarket,
  limit?: SpotifyLimit,
  offset?: SpotifyOffset
}

export interface SpotifyArtistRequestParameters {
  market?: SpotifyMarket,
  limit?: SpotifyLimit,
  offset?: SpotifyOffset,
  include_groups?: IncludeGroups
}

export interface SpotifyPlayerRequestParameters {
  limit?: SpotifyLimit,
  after?: string,
  before?: string
  uri?: SpotifyUri
}

export interface SpotifyRecommendationParameters {
  limit?: number,
  market?: string,
  seed_artists?: string[],
  seed_genres?: string[],
  seed_tracks?: string[],
  min_acousticness?: number,
  max_acousticness?: number,
  target_acousticness?: number,
  min_danceability?: number,
  max_danceability?: number,
  target_danceability?: number,
  min_duration_ms?: number,
  max_duration_ms?: number,
  target_duration_ms?: number,
  min_energy?: number,
  max_energy?: number,
  target_energy?: number,
  min_instrumentalness?: number,
  max_instrumentalness?: number,
  target_instrumentalness?: number,
  min_key?: number,
  max_key?: number,
  target_key?: number,
  min_liveness?: number,
  max_liveness?: number,
  target_liveness?: number,
  min_loudness?: number,
  max_loudness?: number,
  target_loudness?: number,
  min_mode?: number,
  max_mode?: number,
  target_mode?: number,
  min_popularity?: number,
  max_popularity?: number,
  target_popularity?: number,
  min_speechiness?: number,
  max_speechiness?: number,
  target_speechiness?: number,
  min_tempo?: number,
  max_tempo?: number,
  target_tempo?: number,
  min_time_signature?: number,
  max_time_signature?: number,
  target_time_signature?: number,
  min_valence?: number,
  max_valence?: number,
  target_valence?: number
}

export interface SpotifySearchParameters {
  q: string,
  type: string,
  market?: SpotifyMarket,
  limit?: SpotifyLimit,
  offset?: SpotifyOffset,
  include_external?: string
}

export interface SpotifyPlaylistRequestBody {
  name?: string,
  public?: boolean,
  collaborative?: boolean,
  description?: string
}

export interface SpotifyUpdatePlaylistRequestBody {
  uris: SpotifyUris,
  range_start?: number,
  insert_before?: number,
  range_length?: number,
  snapshot_id?: string
}

export interface SpotifyAddToPlaylistRequestBody {
  uris: SpotifyUris,
  position?: number
}

export interface SpotifyPlaylistRequestParameters {
  fields?: string,
  limit?: number,
  offset?: number,
  market?: string
}

export interface SpotifyRemovePlaylistItem {
  uri: SpotifyUri
}

export interface SpotifyRemovePlaylistItemsRequestBody {
  tracks: SpotifyRemovePlaylistItem[],
  snapshot_id?: string
}
