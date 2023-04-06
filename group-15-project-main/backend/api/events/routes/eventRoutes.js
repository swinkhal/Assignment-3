/**
 * @author Amanjot Singh
 **/

const express = require("express");
const EventService = require("../services/eventServices");

const router = express.Router();

/**
 * @author Amanjot Singh
 * @description Get all events
 * @params request, response
 * @return events
 */
router.get("/", (req, res) => {
  EventService.getAllEvents()
    .then((events) => {
      if (events.length > 0) {
        res.status(200).json({
          message: "Events retrieved",
          success: true,
          events: events,
        });
      } else {
        res.status(404).json({
          message: "No event found",
          success: false,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        success: false,
      });
    });
});

/**
 * @author Amanjot Singh
 * @description Get event with given id
 * @params request, response
 * @return event
 */
router.get("/event/:eventId", (req, res) => {
  EventService.getEvent(req.params.eventId)
    .then((event) => {
      if (event) {
        return res.status(200).json({
          success: true,
          message: "Event fetched",
          event: event,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Event with given id not found",
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    });
});

/**
 * @author Amanjot Singh
 * @description Delete event with given id
 * @params request, response
 * @return result
 */
router.delete("/event/:eventId", (req, res) => {
  EventService.deleteEvent(req.params.eventId)
    .then((deleteResult) => {
      if (deleteResult.deletedCount) {
        res.status(200).json({
          message: "Event deleted",
          success: true,
        });
      } else {
        res.status(404).json({
          message: "Event not found",
          success: false,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Something went wrong",
        success: false,
      });
    });
});

/**
 * @author Amanjot Singh
 * @description Update event with given id
 * @params request, response
 * @return result
 */
router.put("/event/:eventId", (req, res) => {
  const eventId = req.params.eventId;
  const event = req.body;
  console.log("Inside update method -->", eventId);
  EventService.updateEvent(eventId, event)
    .then((updateResult) => {
      console.log("Update Result --> ", updateResult);
      if (updateResult.acknowledged) {
        res.status(200).json({
          message: "Event updated",
          success: true,
          event: event,
        });
      } else {
        res.status(404).json({
          message: "Event not found",
          success: false,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
        success: false,
      });
    });
});

/**
 * @author Amanjot Singh
 * @description Create a new event
 * @params request, response
 * @return event
 */
router.post("/", (req, res) => {
  const event = req.body.event;
  console.log("create event-->", event);
  if (event) {
    EventService.createNewEvent(event)
      .then((newEvent) => {
        res.status(200).json({
          message: "Event added",
          success: true,
          event: { ...newEvent },
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: err.message,
          success: false,
        });
      });
  } else {
    res.status(500).json({
      message: "Invalid Input - Unable to add event",
      success: false,
    });
  }
});

module.exports = router;
