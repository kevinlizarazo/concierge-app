import { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";

import { NextLinkComposed } from "@src/components/Link/Link";

import { SpotifyUser } from "@src/api/spotify/types/responses";

export default function Welcome() {
  const [userInfo, setUserInfo] = useState<SpotifyUser | null>(null);
  const [flag, setFlag] = useState<boolean>(false);

  const getUserInfo = async () => {
    const response = await fetch("/api/spotify/users/user").then((res) =>
      res.json()
    );
    setUserInfo(response);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={4}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        {userInfo && userInfo.display_name && (
          <Grid item xs={3}>
            <Typography variant="h3" textAlign={"center"}>
              Welcome, {userInfo.display_name}
            </Typography>
          </Grid>
        )}

        <Grid item xs={3}>
          <Paper>
            <Box padding={1}>
              <TypeAnimation
                sequence={[
                  `Concierge is a tool that helps you learn more about your music.
                  It uses your Spotify data to show your top tracks and artists over
                  different time periods. You can also ask GPT to summarize that data.
                  Soon, it will be able to analyze your playlists and recommend new 
                  music according to filters you can set, like genre, mood, and energy. 
                  For now, what would you like to do?`,
                  1000,
                  () => {
                    setFlag(true);
                  },
                ]}
                wrapper="span"
                cursor={true}
                speed={80}
              />
            </Box>
          </Paper>
        </Grid>

        {flag && (
          <Grid item xs={3}>
            <ButtonGroup
              orientation="vertical"
              variant="outlined"
              color="secondary"
              size="large"
              aria-label="vertical outlined button group"
            >
              <Button
                component={NextLinkComposed}
                to={{
                  pathname: "/learn",
                  // query: { name: 'learn' },
                }}
              >
                See my top artists and tracks
              </Button>
              {/* The buttons below will be activated when the features are complete. */}
              {/* <Button
              component={NextLinkComposed}
              to={{
                pathname: "/learn/playlists",
                // query: { name: 'learn' },
              }}
            >
              Learn about my playlists
            </Button>
            <Button
              component={NextLinkComposed}
              to={{
                pathname: "/find",
              }}
            >
              Find new music
            </Button> */}
            </ButtonGroup>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
