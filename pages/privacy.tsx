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
# Privacy Policy

Last Updated: May 21, 2023

This privacy policy ("Policy") explains how this web application ("App") collects, uses, 
and discloses your information while you use the App. The developer respects your privacy and is 
committed to protecting it through compliance with this Policy.

## Information Collected

This App uses Spotify's Web API to collect your recently played music, but does not 
store this data. Instead, it only caches or saves this data on your device for the duration 
of your current browsing session. The information that collected is used to provide 
recommendations and AI-based commentary for your recently played music.

The information potentially collected can include:

- The songs you've listened to recently.
- Your Spotify public profile information.

## How The Information is Used

Information is used in the following ways:

- Displaying Data: This App shows your recently played music.
- AI Commentary: This App uses your listening history to provide AI-based commentary on your 
recently played artists and tracks.
- Improvement of Services: This app uses your information to understand how you engage 
with this App and improve this App's services accordingly.

## Third-Party Services

This App uses Spotify's Web API to collect your information and OpenAI's ChatGPT to provide 
commentary. When interacting with these services, you are subject to their respective privacy 
policies. The developer encourages you to read them:

- Spotify's Privacy Policy: https://www.spotify.com/legal/privacy-policy/
- OpenAI's Use Case Policy: https://platform.openai.com/docs/use-case-policy

## Data Security

Although this App does not store your data, the developer is committed to ensuring that your information is 
secure. All efforts are being taken to use suitable means to protect your information. However, remember that 
no method of transmission over the internet or method of electronic storage is 100% secure, 
and there cannot be a guarantee its absolute security.

## Changes to This Privacy Policy

The developer may update the Privacy Policy from time to time. The developer will notify you of any changes 
by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically 
for any changes.

## Contact Us

If you have any questions or suggestions about the Privacy Policy, do not hesitate to contact 
the developer at:

kevin at lizarazo.dev

## Acknowledgement

By using this App, you acknowledge that you have read and understood this privacy policy.

      `}
          </ReactMarkdown>
        </Grid>
      </Grid>
    </Container>
  );
}
