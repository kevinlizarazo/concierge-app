import { useEffect, useState, useRef, useMemo } from "react";

import { motion } from "framer-motion";

import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Input from "@mui/material/Input";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { SpotifyTrack } from "@src/api/spotify/types/responses";
import TopTrack from "@src/components/TopTrack/TopTrack";

import * as Tone from "tone";

export default function TopArtistsGroup(props: any) {
  const theme = useTheme();
  const { topTracks, handleTimeRange } = props;
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(null);
  const players = useRef(null);

  //wrap urls in useMemo
  const urls = useMemo(() => {
    const urlData = {};
    topTracks?.forEach((track: SpotifyTrack) => {
      urlData[track.id] = track.preview_url;
    });
    return urlData;
  }, [topTracks]);

  useEffect(() => {
    players.current = new Tone.Players(urls).toDestination();
    players.current.fadeIn = 1;
    players.current.fadeOut = 0.5;
  }, [urls]);

  useEffect(() => {
    if (audio) {
      players.current.stopAll(0.5);
      audio.start(0.5);
    } else {
      players.current.stopAll(0.5);
    }
  }, [playing, audio]);

  function setTimeRange(value) {
    handleTimeRange(value);
  }

  function previewHandler(id: string) {
    players.current.stopAll(0.5);
    setAudio(players.current.player(id));
  }

  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid xs={12}>
          <Stack direction={"row"} spacing={1} mt={4}>
            <Typography
              variant="h6"
              textAlign={"center"}
              sx={{ fontSize: { xs: "15px", md: "20px" } }}
            >
              Top tracks over the last
            </Typography>
            <Box sx={{ minWidth: 120, position: "relative" }}>
              <FormControl
                sx={{ minWidth: 80, position: "absolute", top: "-3px" }}
                variant="standard"
              >
                <Select
                  defaultValue={"medium_term"}
                  autoWidth
                  inputProps={{
                    name: "timeRange",
                    id: "uncontrolled-native",
                  }}
                  input={
                    <Input
                      sx={{
                        fontFamily: theme.typography.h6.fontFamily,
                        fontSize: { xs: "15px", md: "20px" },
                        marginBottom: "2px",
                      }}
                    />
                  }
                  onChange={(e) => {
                    setTimeRange(e.target.value);
                  }}
                >
                  <MenuItem value={"short_term"}>four weeks</MenuItem>
                  <MenuItem value={"medium_term"}>six months</MenuItem>
                  <MenuItem value={"long_term"}>several years</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
        </Grid>
        <Grid
          xs={12}
          container
          spacing={1}
          // direction="column"
          alignItems="top"
        >
          {topTracks &&
            topTracks.map((track: SpotifyTrack) => (
              <Grid
                key={track.name}
                xs={12}
                sm={12}
                md={12}
                alignItems="center"
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      scale: 0,
                      opacity: 0,
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 0.1,
                      },
                    },
                  }}
                >
                  <TopTrack
                    key={track.id}
                    id={track.id}
                    image={track.album.images[0].url}
                    artist={track.artists}
                    title={track.name}
                    album={track.album.name}
                    preview={track.preview_url}
                    handlePreview={previewHandler}
                  />
                </motion.div>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Container>
  );
}
