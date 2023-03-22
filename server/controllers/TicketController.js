import { successResponse } from "../helpers/responses.js";
import Ticket from "../models/Ticket.js";

export const createTicket = async (req, res, next) => {
    try {
        const { event_id, isValid } = req.body;
        const newTicket = new Ticket({ event_id, isValid });
        const savedTicket = await newTicket.save();
        return successResponse(res, savedTicket);
    } catch (err) {
        next(err);
    }
};