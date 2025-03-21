import { promises } from 'dns'
import { HydratedDocument, Model } from 'mongoose'

export interface ITour {
    name: string
    durationHours: number
    averageRating: number
    price: number
    coverImage: string
    images: string[]
    startDates: Date[]
    startLocation: string
    locations: string[]
    slug: string
}

export interface ITourMethods {
    getNextNearestStartDateAndEndDate(): {
        nearestStartDate: Date | null
        estimatedEndDate: Date | null
    }
}

interface TTourModel
    extends Model<ITour, Record<string, unknown>, ITourMethods> {
    startDates: Date[]
    durationHours: number
    getNextNearestStartDateAndEndDate(): Promise<
        HydratedDocument<ITour, ITourMethods>
    >
}

// type TTourModel = Model<ITour, Record<string, unknown>, ITourMethods>

export default TTourModel
