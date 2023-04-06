/**
 * @author Amanjot Singh
 **/

import { Button, Container, Grid } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CenteredTabs from "../../components/CenteredTabs";
import EventCard from "../../components/EventCard";
// import eventsData from "../../data/upcomingEvents.json";
import { eventsApi } from "./services/events-api";

function UpcomingEvents() {
  const [eventsData, setEventsData] = React.useState([]);
  React.useEffect(() => {
    eventsApi
      .getAllEvents()
      .then((res) => {
        setEventsData(() => res?.data?.events || []);
        console.log(res.data.events)
      })
      .catch((err) => {
        console.log("While fetching events-->", err);
      });
  }, []);

  return (
    <Container sx={{ marginTop: "25px" }}>
      <Container maxWidth="l" sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          href="/events/create"
        >
          Create
        </Button>
        <CenteredTabs />
      </Container>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={8}>
          {eventsData
            .filter((event) => event.date && Date.parse(event.date) > Date.now())
            .map((event) => (
              <Grid item key={event.eventId} xs={12} sm={6} md={4}>
                <EventCard
                  key={event._id}
                  id={event._id}
                  name={event.name}
                  imageURL={event.imageURL}
                  brief={event.brief}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default UpcomingEvents;
