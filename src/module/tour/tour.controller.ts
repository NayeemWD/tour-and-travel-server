import { Request, Response } from 'express'
import { tourService } from './tour.service'

const createTour = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const result = await tourService.createTour(body)

        res.send({
            success: true,
            message: 'Tour created successfully',
            result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
            error,
        })
    }
}

const getTour = async (req: Request, res: Response) => {
    try {
        const result = await tourService.getTours()

        res.send({
            success: true,
            message: 'Tour get successfully',
            result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
            error,
        })
    }
}

const getSingleTour = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await tourService.getSingleTour(id)

        res.send({
            success: true,
            message: 'Tour getSingleTour successfully',
            result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
            error,
        })
    }
}

const updateTour = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const body = req.body
        const result = await tourService.updateTour(id, body)

        res.send({
            success: true,
            message: 'Tour update successfully',
            result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
            error,
        })
    }
}

const deleteTour = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await tourService.deleteTour(id)

        res.send({
            success: true,
            message: 'Tour deleted successfully',
            result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
            error,
        })
    }
}

const getNextSchedule = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await tourService.getNextSchedule(id)

        res.send({
            success: true,
            message: 'Tour deleted successfully',
            result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
            error,
        })
    }
}

export const tourController = {
    createTour,
    getTour,
    getSingleTour,
    updateTour,
    deleteTour,
    getNextSchedule
}
