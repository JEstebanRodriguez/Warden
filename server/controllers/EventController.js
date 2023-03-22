import { passwordEncrypt } from "../helpers/password.helpers.js";
import { successResponse } from "../helpers/responses.js";
import Event from "../models/Event.js";
import Ticket from "../models/Ticket.js"

export const getAllEvents = async (req, res, next) => {
    try {
        const events = await Event.find();
        return successResponse(res, events);
    } catch (err) {
        next(err);
    }
};

export const getEventById = async (req, res, next) => {
    const { _id } = req.params;
    try {
        const event = await Event.findById(_id);
        return successResponse(res, event);
    } catch (err) {
        next(err);
    }
};

export const getTicketsByEventId = async (req, res, next) => {
    try {
      const { id } = req.params;
      const tickets = await Ticket.find({ event_id: id });
      return successResponse(res, tickets);
    } catch (err) {
      next(err)
    }
  };

export const createEvent = async (req, res, next) => {
    const body = req.body;
    try {
        const hashPassword = passwordEncrypt(body.password);
        const newEvent = new Event({ ...body, password: hashPassword });
        const savedEvent = await newEvent.save();
        return successResponse(res, "Event created successfully", 201);
    } catch (err) {
        next(err);
    }
};


// export const createEvent = async (req, res, next) => {
//     const body = req.body;
//     try {
//         const hashPassword = passwordEncrypt(body.password);
//         await Event.create({ ...body, password: hashPassword });

//     } catch (err) {

//     }
// };

export const updateEventById = async (req, res, next) => {
    const { _id } = req.params;
    try {
        await Event.findByIdAndUpdate(_id, req.body, { new: true });
        return successResponse(res, "Event updated successfully", 203);
    } catch (err) {
        next(err);
    }
};

export const deleteEventById = async (req, res, next) => {
    const { _id } = req.params;
    try {
        await Event.findByIdAndDelete(_id);
        return successResponse(res, "Event deleted successfully");
    } catch (err) {
        next(err);
    }
};