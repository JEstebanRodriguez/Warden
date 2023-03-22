import { successResponse } from "../helpers/responses.js";
import Ticket from "../models/Ticket.js";

export const createTicket = async (req, res, next) => {
    try {
        const { email, qty, event_id } = req.body;
        const length = qty;
        let ticketsArr = [];
        for (var i = 0; i < length; i++) {
            ticketsArr[i] = { email, event_id }
        }
        const newTickets = await Ticket.insertMany(ticketsArr)
        const eventDetailForTicket = await Ticket.findById({ _id: newTickets[0]._id }).populate('event_id')

        const eventDetailsToSend = {
            userName: eventDetailForTicket.event_id.userName,
            eventDate: eventDetailForTicket.event_id.createdAt,
            email,
            tickets: qty
        }

        // en la variable newTickets estan todos los tickets creados, el array a iterar en el nodemailer,
        // en la variable eventDetailsToSend esta los detalles del evento y el email a donde enviar, y el usuario que organizo y cuantos tickets van, para informar.
        tuhelper(newTickets, eventDetailsToSend)

        return successResponse(res, "Ticket sends successfully", 201)
    } catch (err) {
        next(err);
    }
};