/**
 * @author Amanjot Singh
 **/

import { httpClient } from "../../../lib/httpClient";

const getAllEvents = () => {
  return httpClient.get("/events");
};

const getEvent = (eventId) => {
  return httpClient.get(`/events/event/${eventId}`);
};

const createEvent = (event) => {
  return httpClient.post("/events", { event });
};

const removeEvent = (eventId) => {
  return httpClient.delete(`/events/event/${eventId}`);
};

const updateEvent = (eventId, event) => {
  console.log("Events API - updateEvent -->", event);
  const response = httpClient.put(`/events/event/${eventId}`, { event });
  console.log("events-api response --> ", response);
  return response;
};

export const eventsApi = {
  getAllEvents,
  getEvent,
  updateEvent,
  removeEvent,
  createEvent,
};
