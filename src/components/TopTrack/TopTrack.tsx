import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Link from "@mui/material/Link";

import Image from "next/image";

export default function TopTrack(props: any) {
  const theme = useTheme();
  const { id, image, artist, title, album, preview, handlePreview } = props;

  function setPreview(id) {
    handlePreview(id);
  }

  const trackLink = `https://open.spotify.com/track/${id}?go=1&nd=1`;

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 65, height: 65 }}
        image={image}
        alt="Live from space album cover"
      />
      <CardActionArea
        sx={{ paddingLeft: theme.spacing(1) }}
        onClick={async () => {
          setPreview(id);
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "0 !important",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
            >
              {title}
            </Typography>
            <Typography color="text.secondary">
              {album} - {artist}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link target="_blank" rel="noopener" href={trackLink}>
          <Image
            src="/Spotify_Icon_RGB_White.png"
            alt="Picture of the logo"
            width={20}
            height={20}
          />
        </Link>
      </CardActions>
    </Card>
  );
}
