import { passwordCompare } from "../helpers/password.helpers.js"
import { successResponse } from "../helpers/responses.js"
import { tokenGenerator } from "../helpers/token.helpers.js"
import User from "../models/User.js"

export const login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) throw new Error('Los datos no son correctos')
        const hashPassword = passwordCompare(password, user.password)
        if (!hashPassword) throw new Error('Los datos no son correctos')
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