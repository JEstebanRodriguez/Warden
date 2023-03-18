import mongoose from 'mongoose'

const { Schema, models, model } = mongoose

const EventSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    maxTickets: {
        type: Number,
        min: 1
    }
}, {
    timestamps: true,
    versionKey: false
})

export default models.event || model('event', EventSchema)