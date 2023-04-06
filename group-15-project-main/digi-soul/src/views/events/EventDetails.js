/**
 * @author Amanjot Singh
 **/

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
// import eventsData from "../../data/events.json";
import { eventsApi } from "./services/events-api";

function EventDetails() {
  const { id } = useParams();
  const [currentEvent, setCurrentEvent] = React.useState([]);
  React.useEffect(() => {
    eventsApi
      .getEvent(id)
      .then((res) => {
        setCurrentEvent(() => res?.data?.event || {});
      })
      .catch((err) => {
        console.log("While fetching an event -->", err);
      });
  }, []);

  return (
    <Container sx={{ paddingTop: "50px" }}>
      <Card sx={{ maxWidth: 600, margin: "0 auto" }}>
        <CardMedia
          sx={{ objectFit: "cover" }}
          component="img"
          alt="Event Image"
          height="200"
          image={currentEvent.imageURL}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {currentEvent.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {currentEvent.detail}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={`/events/all`}>
            Back
          </Button>
          <Button size="small">Save</Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default EventDetails;
