// req and res manage

import { Request, Response } from 'express'
import User from './user.model'
import { userService } from './user.service'

const createUser = async (req: Request, res: Response) => {
    try {
        const payload = req.body

        const result = await userService.createUser(payload)

        res.json({
            status: true,
            message: 'User created successfully',
            data: result,
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        })
    }
}

const getUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.getUser()

        res.send({
            status: true,
            message: 'Users getting successfullt',
            result,
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        })
    }
}
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId

        const result = await userService.getSingleUser(userId)

        res.send({
            status: true,
            message: 'User getting successfullt',
            result,
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        })
    }
}
const updateUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const body = req.body

        const result = await userService.updateUser(userId, body)

        res.send({
            status: true,
            message: 'User updated successfullt',
            result,
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        })
    }
}
const deletUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        await userService.deletUser(userId)
        // const result = await userService.deletUser(userId)

        res.send({
            status: true,
            message: 'User deleted successfullt',
            result: {},
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        })
    }
}

export const userController = {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deletUser,
}
