import ReactMarkdown from "react-markdown";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";

export default function PrivacyPolicy() {
  return (
    <Container maxWidth="md" sx={{ paddingTop: 5, paddingBottom: 10 }}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid xs={12}>
          <ReactMarkdown>
            {`
# About
Who are the people in your life who point you in the direction of new artists, songs, and genres of music?
I am fortunate enough to have some friends who are always sharing some great music. They are usually the 
ones who introduce me to new tracks, and I am always grateful for their recommendations.

As a Spotify user, I started thinking about ways I could help people seek out their own recommendations and even 
learn about their playlists.

Introducing: Concierge. It's a tool that helps you learn more about your music. It uses your Spotify data to show 
your top tracks and artists overdifferent time periods. You can also ask GPT to summarize that data. Soon, it will 
be able to analyze your playlists and recommend new music according to filters you can set, like genre, mood, and 
energy.

I hope you enjoy using Concierge as much as I enjoyed building it. If you have any questions or feedback, please feel 
free to reach out to me.

-- [Kevin Lizarazo](https://kevinlizarazo.com)

## About the Technology
Concierge is built with Next.js, React, and Material UI. Next Auth powers the authentication logic for this app's 
connection to Spotify and general session management. It uses Spotify's Web API to retrieve listening data and 
OpenAI's Chat API (gpt-3.5-turbo) to provide commentary. When interacting with these services, you are subject to 
their respective privacy policies. I encourage you to read them:

- Spotify's Privacy Policy: https://www.spotify.com/legal/privacy-policy/
- OpenAI's Use Case Policy: https://platform.openai.com/docs/use-case-policy

      `}
          </ReactMarkdown>
        </Grid>
      </Grid>
    </Container>
  );
}
