/**
 * @author Amanjot Singh
 **/

import { Button, Container, Grid } from "@mui/material";
import React, { useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import MyEventCard from "../../components/MyEventCard";
// import eventsData from "../../data/events.json";
import { eventsApi } from "./services/events-api";
import axios from "axios";
import UpdateEvent from "./UpdateEvent";

function MyEvents() {
  const [eventsData, setEventsData] = React.useState([]);
  const [eventIDs, setEventIDs] = React.useState([]);
  const dataFetchedRef = React.useRef(false);

  React.useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    // const eventIDs = ["6425bfbbff020e5a650712aa", "6425bfcdff020e5a65072867"];
    axios
      .post("https://digi-soul.onrender.com/api/user_details/fetchevents", {
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        setEventIDs(res?.data?.eventIds);
        console.log(eventIDs);
        res?.data?.eventIds.map((id) => {
          eventsApi
            .getEvent(id)
            .then((res) => {
              setEventsData((prev) => [...prev, res?.data?.event || {}]);
              console.log(eventsData);
            })
            .catch((err) => {
              console.log("While fetching an event -->", err);
            });
        });
      });
  }, []);

  function deleteEvent(id) {
    eventsApi
      .removeEvent(id)
      .then((res) => {
        console.log("Event Delete-->", res);
        setEventsData((prevEventData) => {
          return prevEventData.filter((event) => {
            return event._id !== id;
          });
        });
      })
      .catch((err) => {
        console.log("While deleting event-->", err);
      });
  }

  return (
    <Container sx={{ marginTop: "25px" }}>
      <Container maxWidth="l">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          href="/events/create"
        >
          Create
        </Button>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="l">
        <Grid container spacing={8}>
          {eventsData.map((event) => (
            <Grid item key={event.eventId} xs={12} sm={6} md={4}>
              <MyEventCard
                key={event._id}
                id={event._id}
                name={event.name}
                imageURL={event.imageURL}
                brief={event.brief}
                deleteEvent={deleteEvent}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default MyEvents;
