import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
    database_url: process.env.DATAVASE_URL,
    port: process.env.PORT,
}
