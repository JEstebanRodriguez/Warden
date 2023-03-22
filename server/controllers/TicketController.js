import { successResponse } from "../helpers/responses.js";
import { sendMail } from '../helpers/nodemailer.helper.js'
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
            eventName: eventDetailForTicket.event_id.eventName,
            eventDate: eventDetailForTicket.event_id.createdAt,
            email,
            tickets: qty
        }

        sendMail(newTickets, eventDetailsToSend)

        return successResponse(res, "Ticket sends successfully", 201)
    } catch (err) {
        next(err);
    }
};

export const useTicket = async (req, res, next) => {
    try {
        // console.log(req.body)
        const Validation = await Ticket.findById({_id: req.body._id})
        if (Validation.isValid == true) {
            const changeValidity = await Ticket.findOneAndUpdate({_id: req.body._id}, {isValid: false})
            return successResponse(res, 'Ticket used, no longer valid', 201)
        }
        throw new Error("Ticket invalid. You cannot enter.")
    } catch (err) {
        next(err)
    }
}

