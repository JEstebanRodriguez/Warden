import mongoose from 'mongoose'

const { Schema, models, model } = mongoose

const UserSchema = new Schema({
    name: {
        type: String,
        requrired: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export default models.users || model('User', UserSchema)