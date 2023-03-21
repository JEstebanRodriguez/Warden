import { passwordCompare } from "../helpers/password.helpers.js"
import { successResponse } from "../helpers/responses.js"
import { tokenGenerator } from "../helpers/token.helpers.js"
import User from "../models/User.js"
import Event from "../models/Event.js"

export const login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400)
            throw new Error('Los datos no son correctos')
            return
        }
        const hashPassword = passwordCompare(password, user.password)
        if (!hashPassword) {
            res.status(400)
            throw new Error('Los datos no son correctos')
            return
        }
        const userAdapter = {
            _id: user._id,
            name: user.name,
            email: user.email
        }
        const token = tokenGenerator(userAdapter)
        return successResponse(res, { user: userAdapter, token })
    } catch (err) {
        next(err)
    }
}

export const clientLogin = async (req, res, next) => {
    const { userName, password } = req.body
    try {
        const event = await Event.findOne({ userName })
        if (!event) {
            res.status(400)
            throw new Error('Los datos no son correctos')
            return
        }
        const hashPassword = passwordCompare(password, event.password)
        if (!hashPassword) {
            res.status(400)
            throw new Error('Los datos no son correctos')
            return
        }
        const eventAdapter = {
            _id: event._id,
            name: event.eventName,
            maxTickets: event.maxTickets
        }
        const token = tokenGenerator(eventAdapter)
        return successResponse(res, { user: eventAdapter, token })
    } catch (err) {
        next(err)
    }
}