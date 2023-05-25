import { motion } from "framer-motion";

import { useTheme } from "@mui/material/styles";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Input from "@mui/material/Input";

import { Typography, typographyClasses } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { SpotifyArtist } from "@src/api/spotify/types/responses";

import TopArtist from "@src/components/TopArtist/TopArtist";

export default function TopArtistsGroup(props: any) {
  const { topArtists, handleTimeRange } = props;

  function setTimeRange(value) {
    handleTimeRange(value);
  }

  const theme = useTheme();

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
              Top artists over the last
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
                  <MenuItem value={"long_term"}>"all time"</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
        </Grid>
        <Grid xs={12} container alignItems="top">
          {topArtists &&
            topArtists?.map((artist: SpotifyArtist) => (
              <Grid key={artist.name} xs={12} sm={6} md={4} alignItems="center">
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
                  <TopArtist
                    key={artist.id}
                    id={artist.id}
                    image={artist.images[0].url}
                    artist={artist.name}
                    genre={artist.genres.slice(0, 3).join(", ")}
                  />
                </motion.div>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Container>
  );
}
