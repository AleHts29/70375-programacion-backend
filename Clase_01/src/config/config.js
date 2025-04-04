import program from '../process.js'
import dotenv from 'dotenv'


const environment = program.opts().mode;


dotenv.config(
    {
        path: environment === "production" ? "./src/config/.env.production" : "./src/config/.env.development"
    }
)


export default {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL,
    adminName: process.env.ADMIN_NAME,
    adminPassword: process.env.ADMIN_PASSWORD
}


