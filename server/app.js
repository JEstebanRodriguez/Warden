import express from 'express'
import cors from 'cors'
import router from './routes/index.js'
import { ErrorHandler } from './middlewares/ErrorHandler.js'

// Load environment variables
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.SERVER_PORT || 5000

// start database connect
import { connection } from './config/connection.js'
await connection()

const app = express()

// load middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// load routes
app.use('/api', router)
app.use(ErrorHandler)

// server start
app.listen(PORT, err => {
    err ? console.error(err) : console.log(`Server listening at the port ${PORT}`)
})