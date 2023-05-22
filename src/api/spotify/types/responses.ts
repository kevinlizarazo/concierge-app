export interface SpotifyExternalUrls {
  spotify: string
}

export interface SpotifyExternalIds {
  isrc?: string,
  ean?: string,
  upc?: string
}

export interface SpotifyExplicitContentSettings {
  filter_enabled: boolean,
  filter_locked: boolean
}

export interface SpotifyImage {
  height: number | null,
  url: string,
  width: number | null
}

export interface SpotifyCursor {
  after: string,
  before: string
}

export interface SpotifyRestrictions {
  reason: string
}

export interface SpotifyCopyright{
  text: string,
  type: string
}

export interface SpotifyLinkedFrom {
  external_urls: SpotifyExternalUrls,
  href: string,
  id: string,
  type: string,
  uri: string
}

export interface SpotifyFollowers {
  href: string | null,
  total: number
}

export interface SpotifyContext {
  type: string,
  href: string,
  external_urls: SpotifyExternalUrls,
  uri: string
}

export interface SpotifyArtistFollowers {
  href: string | null,
  total: number
}

export interface SpotifyArtist {
  external_urls: SpotifyExternalUrls,
  followers: SpotifyArtistFollowers,
  genres: string[],
  href: string,
  id: string,
  images: SpotifyImage[],
  name: string,
  popularity: number,
  type: string,
  uri: string
}

export interface SpotifyArtists {
  items: SpotifyArtist[]
}

export interface SpotifySimplifiedArtist {
  external_urls: SpotifyExternalUrls,
  href: string,
  id: string,
  name: string,
  type: string,
  uri: string
}

export interface SpotifyTrack {
  album: SpotifySimplifiedAlbum,
  artists: SpotifyArtist[],
  available_markets: string[],
  disc_number: number,
  duration_ms: number,
  explicit: boolean,
  external_ids: SpotifyExternalIds,
  external_urls: SpotifyExternalUrls,
  href: string,
  id: string,
  is_playable: boolean,
  linked_from?: SpotifyLinkedFrom,
  restrictions?: SpotifyRestrictions,
  name: string,
  popularity: number,
  preview_url: string | null,
  track_number: number,
  type: string,
  uri: string,
  is_local: boolean
}

export interface SpotifyTracks {
  tracks: SpotifyTrack[]
}

export interface SpotifySimplifiedTrack {
  artists: SpotifySimplifiedArtist[],
  available_markets: string[],
  disc_number: number,
  duration_ms: number,
  explicit: boolean,
  external_urls: SpotifyExternalUrls,
  href: string,
  id: string,
  is_playable: boolean,
  linked_from?: SpotifyLinkedFrom, 
  restrictions?: SpotifyRestrictions,
  name: string,
  preview_url: string,
  track_number: number,
  type: string,
  uri: string,
  is_local: boolean
}

export interface SpotifyAlbumTracks {
  href: string,
  limit: number,
  next: string | null,
  offset: number,
  previous: string | null,
  total: number,
  items: SpotifySimplifiedTrack[]
}

export interface SpotifyAlbum {
  album_type: string,
  total_tracks: number,
  available_markets: string[],
  external_urls: SpotifyExternalUrls,
  href: string,
  id: string,
  images: SpotifyImage[],
  name: string,
  release_date: string,
  release_date_precision: string,
  restrictions?: SpotifyRestrictions,
  type: string,
  uri: string,
  copyrights: SpotifyCopyright[],
  external_ids: SpotifyExternalIds,
  genres: string[],
  label: string,
  popularity: number,
  artists: SpotifyArtist[],
  tracks: SpotifyAlbumTracks
}

export interface SpotifyAlbums {
  albums: SpotifyAlbum[]
}

export interface SpotifySimplifiedAlbum {
  album_type: string,
  total_tracks: number,
  available_markets: string[],
  external_urls: SpotifyExternalUrls,
  href: string,
  id: string,
  images: SpotifyImage[],
  name: string,
  release_date: string,
  release_date_precision: string,
  restrictions?: SpotifyRestrictions,
  type: string,
  uri: string,
  copyrights: SpotifyCopyright[],
  external_ids: SpotifyExternalIds,
  genres: string[],
  label: string,
  popularity: number,
  album_group?: string,
  artists: SpotifySimplifiedArtist[],
}

export interface SpotifySavedAlbums {
  added_at: string,
  album: SpotifyAlbum
}

export interface SpotifyUserSavedAlbums {
  href: string,
  limit: number,
  next: string | null,
  offset: number,
  previous: string | null,
  total: number,
  items: SpotifySavedAlbums[]
}

export interface SpotifyArtistAlbums {
  href: string,
  limit: number,
  next: string | null,
  offset: number,
  previous: string | null,
  total: number,
  items: SpotifySimplifiedAlbum[]
}

export interface SpotifyArtistTopTracks {
  tracks: SpotifyTrack[]
}

export interface SpotifyArtistRelatedArtists {
  artists: SpotifyArtist[]
}

export interface SpotifyGenres {
  genres: string[]
}

export interface SpotifyMarkets {
  markets: string[]
}

export interface SpotifyPlayHistory {
  track: SpotifyTrack,
  played_at: string,
  context: SpotifyContext
}

export interface SpotifyUserRecentlyPlayed {
  href: string,
  limit: number,
  next: string | null,
  cursor: SpotifyCursor,
  total: number,
  items: SpotifyPlayHistory[]
}

export interface SpotifyPlaylistOwner {
  external_urls: SpotifyExternalUrls,
  followers: SpotifyFollowers,
  href: string,
  id: string,
  type: string,
  uri: string
  display_name: string | null,
}

export interface SpotifyPlaylistTrack {
  added_at: string,
  added_by: SpotifyPlaylistOwner,
  is_local: boolean,
  track: SpotifyTrack
}

export interface SpotifyPlaylistTracks {
  href: string,
  limit: number,
  next: string | null,
  offset: number,
  previous: string | null,
  total: number,
  items: SpotifyPlaylistTrack[],
}

export interface SpotifyPlaylist {
  collaborative: boolean,
  description: string | null,
  external_urls: SpotifyExternalUrls,
  followers: SpotifyFollowers,
  href: string,
  id: string,
  images: SpotifyImage[],
  name: string,
  owner: SpotifyPlaylistOwner,
  public: boolean | null,
  snapshot_id: string,
  tracks: SpotifyPlaylistTracks,
  type: string,
  uri: string
}

export interface SpotifySimplifiedPlaylist {
  collaborative: boolean,
  description: string | null,
  external_urls: SpotifyExternalUrls,
  href: string,
  id: string,
  images: SpotifyImage[],
  name: string,
  owner: SpotifyPlaylistOwner,
  public: boolean | null,
  snapshot_id: string,
  tracks: {
    href: string,
    total: number
  },
  type: string,
  uri: string
}

export interface SpotifyUpdatePlaylist {
  snapshot_id: string
}

export interface SpotifyUserPlaylists {
  href: string,
  limit: number,
  next: string | null,
  offset: number,
  previous: string | null,
  total: number,
  items: SpotifySimplifiedPlaylist[]
}

export interface SpotifySearchTrackResult {
  tracks: {
    href: string,
    limit: number,
    next: string | null,
    offset: number,
    previous: string | null,
    total: number,
    items: SpotifyTrack[]
  }
}

export interface SpotifySearchArtistResult {
  artists: {
    href: string,
    limit: number,
    next: string | null,
    offset: number,
    previous: string | null,
    total: number,
    items: SpotifyArtist[]
  }
}

export interface SpotifySearchAlbumResult {
  albums: {
    href: string,
    limit: number,
    next: string | null,
    offset: number,
    previous: string | null,
    total: number,
    items: SpotifySimplifiedAlbum[]
  }
}

export interface SpotifySearchAlbumResult {
  playlists: {
    href: string,
    limit: number,
    next: string | null,
    offset: number,
    previous: string | null,
    total: number,
    items: SpotifySimplifiedPlaylist[]
  }
}

export interface SpotifySavedTrack {
  added_at: string,
  track: SpotifyTrack
}

export interface SpotifyUserSavedTracks {
  href: string,
  limit: number,
  next: string | null,
  offset: number,
  previous: string | null,
  total: number,
  items: SpotifySavedTrack[]
}

export interface SpotifyTrackAudioFeatures {
  acousticness: number,
  analysis_url: string,
  danceability: number,
  duration_ms: number,
  energy: number,
  id: string,
  instrumentalness: number,
  key: number,
  liveness: number,
  loudness: number,
  mode: number,
  speechiness: number,
  tempo: number,
  time_signature: number,
  track_href: string,
  type: string,
  uri: string,
  valence: number
}

export interface SpotifyTracksAudioFeatures{
  audio_features: SpotifyTrackAudioFeatures[]
}

export interface SpotifyRecommendationSeed {
  afterFilteringSize: number,
  afterRelinkingSize: number,
  href: string,
  id: string,
  initialPoolSize: number,
  type: string
}

export interface SpotifyRecommendations {
  seeds: SpotifyRecommendationSeed[],
  tracks: SpotifyTrack[]
}

export interface SpotifyUser {
  country: string,
  display_name: string,
  email: string,
  explicit_content: SpotifyExplicitContentSettings,
  external_urls: SpotifyExternalUrls,
  followers: SpotifyFollowers,
  href: string,
  id: string,
  images: SpotifyImage[],
  product: string,
  type: string,
  uri: string
}

export interface SpotifyUserTopItems<T> {
  href: string,
  limit: number,
  next: string | null,
  offset: number,
  previous: string | null,
  total: number,
  items: T
}
