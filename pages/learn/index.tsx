import { useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import TopArtistsGroup from "@src/components/TopArtistsGroup/TopArtistsGroup";
import TopTracksGroup from "@src/components/TopTracksGroup/TopTracksGroup";
import ConciergeMessage from "@src/components/ConciergeMessage/ConciergeMessage";

const getTopArtists = async (timeRange: string | null) => {
  const response = await fetch(
    `/api/spotify/me/topArtists?timeRange=${timeRange}`
  ).then((res) => res.json());

  const data = response.items.map((item) => {
    return {
      id: item.id,
      name: item.name,
      genres: item.genres,
      images: item.images,
    };
  });
  return data;
};

const getTopTracks = async (timeRange: string | null) => {
  const response = await fetch(
    `/api/spotify/me/topTracks?timeRange=${timeRange}`
  ).then((res) => res.json());

  const data = response.items.map((item) => {
    return {
      id: item.id,
      name: item.name,
      artists: item.artists.map((artist) => artist.name).join(", "),
      album: item.album,
      preview_url: item.preview_url,
    };
  });
  return data;
};

const getGPTArtistsAnalysis = async (data) => {
  const response = await fetch("/api/openai/promptHandler", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
  return response;
};

const loadingMessage = [
  "Give me a few seconds to check this out ",
  800,
  "Give me a few seconds to check this out .",
  800,
  "Give me a few seconds to check this out ..",
  800,
  "Give me a few seconds to check this out ...",
  800,
];

export default function Learn() {
  const [artistTimeRange, setArtistTimeRange] = useState("medium_term");
  const [trackTimeRange, setTrackTimeRange] = useState("medium_term");
  const [employArtistGPT, setEmployArtistGPT] = useState(false);
  const [employTrackGPT, setEmployTrackGPT] = useState(false);

  const handleArtistTimeRange = (value) => {
    setArtistTimeRange(value);
    setEmployArtistGPT(false);
  };

  const handleTrackTimeRange = (value) => {
    setTrackTimeRange(value);
    setEmployTrackGPT(false);
  };

  const { data: topArtists } = useQuery(["artists", artistTimeRange], () =>
    getTopArtists(artistTimeRange)
  );
  const { data: topTracks } = useQuery(["tracks", trackTimeRange], () =>
    getTopTracks(trackTimeRange)
  );

  const topArtistKeys = topArtists?.map((artist) => artist.name);
  const topTrackKeys = topTracks?.map((track) => {
    return {
      name: track.name,
      artists: track.artists,
      album: track.album.name,
    };
  });

  const { data: topArtistsAnalysis } = useQuery(
    ["artistsAnalysis", topArtistKeys, employArtistGPT],
    () => getGPTArtistsAnalysis({ data: topArtists, mode: "artists" }),
    { enabled: Boolean(employArtistGPT) }
  );
  const { data: topTracksAnalysis } = useQuery(
    ["artistsAnalysis", topTrackKeys, employTrackGPT],
    () => getGPTArtistsAnalysis({ data: topTrackKeys, mode: "tracks" }),
    { enabled: Boolean(employTrackGPT) }
  );

  return (
    <Container maxWidth="md" sx={{ paddingTop: 12, paddingBottom: 10 }}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid xs={12}>
          <ConciergeMessage
            message={[
              `
            Here are your top artists and tracks over time. 
            You can select a time range for each category.
            Spotify provides three approximate time ranges: 
            four weeks, six months, or several years (which includes 
            all new data as it becomes available).`,
              1000,
            ]}
          />
        </Grid>
      </Grid>

      <TopArtistsGroup
        topArtists={topArtists}
        handleTimeRange={handleArtistTimeRange}
      />

      {topArtists && topArtists.length > 0 && (
        <Grid xs={12} mt={4} mb={4} textAlign={"center"}>
          <ButtonGroup
            orientation="vertical"
            variant="outlined"
            color="secondary"
            size="large"
            aria-label="vertical outlined button group"
          >
            <Button
              onClick={() => {
                setEmployArtistGPT(true);
              }}
            >
              Analyze my top artists
            </Button>
          </ButtonGroup>
        </Grid>
      )}

      {!(topArtistsAnalysis?.length > 0) && employArtistGPT && (
        <ConciergeMessage repeat={Infinity} message={loadingMessage} />
      )}
      {topArtistsAnalysis?.length > 0 && (
        <ConciergeMessage message={[topArtistsAnalysis, 1000]} />
      )}

      <TopTracksGroup
        topTracks={topTracks}
        handleTimeRange={handleTrackTimeRange}
      />

      {topTracks && topTracks.length > 0 && (
        <Grid xs={12} mt={4} mb={4} textAlign={"center"}>
          <ButtonGroup
            orientation="vertical"
            variant="outlined"
            color="secondary"
            size="large"
            aria-label="vertical outlined button group"
          >
            <Button
              onClick={() => {
                setEmployTrackGPT(true);
              }}
            >
              Analyze my top tracks
            </Button>
          </ButtonGroup>
        </Grid>
      )}

      {!(topTracksAnalysis?.length > 0) && employTrackGPT && (
        <ConciergeMessage repeat={Infinity} message={loadingMessage} />
      )}
      {topTracksAnalysis?.length > 0 && (
        <ConciergeMessage message={[topTracksAnalysis, 1000]} />
      )}
    </Container>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["artists", "medium_term"], () =>
    getTopArtists("medium_term")
  );
  await queryClient.prefetchQuery(["tracks", "medium_term"], () =>
    getTopTracks("medium_term")
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
