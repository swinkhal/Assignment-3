/**
 * @author Amanjot Singh
 **/

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function EventCard(props) {
  const { id, title, description, imgURL } = props;
  return (
    <Card sx={{ maxWidth: 600, margin: "0 auto" }}>
      <CardMedia
        sx={{ objectFit: "cover" }}
        component="img"
        alt="Event Image"
        height="200"
        image={imgURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Save</Button>
        <Button size="small" href={`/review/${id}`}>
          More Details
        </Button>
      </CardActions>
    </Card>
  );
}
