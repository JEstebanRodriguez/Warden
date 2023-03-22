import { successResponse } from "../helpers/responses.js";
import Ticket from "../models/Ticket.js";

export const createTicket = async (req, res, next) => {
    try {
        const { email, qty, event_id, status } = req.body;
        let ticketArr = []
        let count = 0
        while (qty.length) {
            console.log('hola')
            count++
        }
         // const newTicket = new Ticket({ event_id, status });
        // const savedTicket = await newTicket.save();
        // return successResponse(res, savedTicket);
    } catch (err) {
        next(err);
    }
};