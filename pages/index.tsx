import Image from "next/image";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useSession, signIn } from "next-auth/react";
import { NextLinkComposed } from "@src/components/Link/Link";

export default function HomePage() {
  const session = useSession();

  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "75vh" }}
      >
        <Grid item xs={3}>
          <Image
            src="/concierge.png"
            alt="Picture of the logo"
            width={200}
            height={200}
          />
        </Grid>

        <Grid item xs={3}>
          <Typography variant="h3">Concierge</Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography variant="body1">
            Learn more about your Spotify music.
          </Typography>
        </Grid>

        {session.status === "authenticated" ? (
          <Grid item xs={3}>
            <Button
              color="secondary"
              variant="contained"
              component={NextLinkComposed}
              to={{
                pathname: "/welcome",
                // query: { name: 'learn' },
              }}
            >
              Enter
            </Button>
          </Grid>
        ) : (
          <Grid item xs={3}>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => signIn("spotify")}
            >
              Login with Spotify
            </Button>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
