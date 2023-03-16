import { successResponse } from "../helpers/responses.js"
import Model from "../models/Model.js"

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await Model.find()
        return successResponse(res, users)
    } catch (err) {
        next(err)
    }
}

export const getUserById = async (req, res, next) => {
    const { _id } = req.params
    try {
        const users = await Model.findById(_id)
        return successResponse(res, users)
    } catch (err) {
        next(err)
    }
}

export const createUser = async (req, res, next) => {
    try {
        await Model.create(req.body)
        return successResponse(res, "User created successfully", 201)
    } catch (err) {
        next(err)
    }
}

export const updateUserById = async (req, res, next) => {
    const { _id } = req.params
    try {
        await Model.findByIdAndUpdate(_id, req.body, { new: true })
        return successResponse(res, "User updated successfully", 203)
    } catch (err) {
        next(err)
    }
}

export const deleteUserById = async (req, res, next) => {
    const { _id } = req.params
    try {
        await Model.findByIdAndDelete(_id)
        return successResponse(res, "User deleted successfully")
    } catch (err) {
        next(err)
    }
}