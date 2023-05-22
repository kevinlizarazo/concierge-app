import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

export default function TopArtist(props: any) {
  const { id, image, artist, genre } = props;
  const artistLink = `https://open.spotify.com/artist/${id}?go=1&nd=1`;
  return (
    <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
      <CardActionArea
        onClick={async () => {
          window.open(artistLink, "_blank");
        }}
      >
        <CardMedia component="img" alt={artist} height="200" image={image} />
        <CardContent>
          <Typography align="center" variant="h6" component="div">
            {artist}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
