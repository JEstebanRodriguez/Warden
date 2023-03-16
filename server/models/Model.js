import mongoose from 'mongoose'

const { Schema, models, model } = mongoose

const ModelSchema = new Schema({
    field: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export default models.table || model('Model', ModelSchema)