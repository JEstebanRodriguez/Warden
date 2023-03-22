import mongoose from 'mongoose'

const { Schema, models, model } = mongoose

const TicketSchema = new Schema({
    event_id: {
        type: Schema.Types.ObjectId,
        ref: 'event',
        required: true
    },
    isValid: {
        type: Boolean,
        default: true
    }
});

export default models.ticket || model('ticket', TicketSchema)

