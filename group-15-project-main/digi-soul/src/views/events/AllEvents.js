/**
 * @author Amanjot Singh
 **/

import { Button, Container, Grid } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CenteredTabs from "../../components/CenteredTabs";
import EventCard from "../../components/EventCard";
// import eventsData from "../../data/events.json";
import { eventsApi } from "./services/events-api";

function AllEvents() {
  const [eventsData, setEventsData] = React.useState([]);
  const [Login, setLogin] = React.useState(localStorage.getItem("login"));

  React.useEffect(() => {
    if (Login == null || Login === "false") {
      setLogin("false");
      localStorage.setItem("login", "false");
      console.log("false called");
    } else if (Login === "true") {
      localStorage.setItem("login", "true");
      setLogin("true");
      console.log("true called");
    }
    console.log(`login value ${Login}`);
  }, [Login]);
  React.useEffect(() => {
    eventsApi
      .getAllEvents()
      .then((res) => {
        setEventsData(() => res?.data?.events || []);
      })
      .catch((err) => {
        console.log("While fetching events-->", err);
      });
  }, []);

  function handleCreate(event){
    event.preventDefault();

    if (Login === 'true'){
      window.location.href = "/events/create"
    }
    else{
      alert('Please login to create an event')
      window.location.href = "/login"
    }
  }

  return (
    <Container sx={{ marginTop: "25px" }}>
      <Container maxWidth="l" sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleCreate}
        >
          Create
        </Button>
        <CenteredTabs />
      </Container>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={8}>
          {eventsData.map((event) => (
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

export default AllEvents;
