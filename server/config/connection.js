import mongoose from 'mongoose'

mongoose.set('strictQuery', false)

export const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected is: ${mongoose.connection.name}`)
    } catch (err) {
        console.error(`Error in the database connection ${err}`)
    }
}