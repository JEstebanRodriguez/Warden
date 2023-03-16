import { passwordEncrypt } from "../helpers/password.helpers.js"
import { successResponse } from "../helpers/responses.js"
import User from "../models/User.js"

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        return successResponse(res, users)
    } catch (err) {
        next(err)
    }
}

export const getUserById = async (req, res, next) => {
    const { _id } = req.params
    try {
        const users = await User.findById(_id)
        return successResponse(res, users)
    } catch (err) {
        next(err)
    }
}

export const createUser = async (req, res, next) => {
    const body = req.body
    try {
        const hashPassword = passwordEncrypt(body.password)
        await User.create({ ...body, password: hashPassword })
        return successResponse(res, "User created successfully", 201)
    } catch (err) {
        next(err)
    }
}

export const updateUserById = async (req, res, next) => {
    const { _id } = req.params
    try {
        await User.findByIdAndUpdate(_id, req.body, { new: true })
        return successResponse(res, "User updated successfully", 203)
    } catch (err) {
        next(err)
    }
}

export const deleteUserById = async (req, res, next) => {
    const { _id } = req.params
    try {
        await User.findByIdAndDelete(_id)
        return successResponse(res, "User deleted successfully")
    } catch (err) {
        next(err)
    }
}