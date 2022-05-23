import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import router from './routes/Root.route.js'

dotenv.config()

const app = express()
const { CORS_DOMAINS: corsDomains, PORT } = process.env

const whiteList = corsDomains.split(', ')
const corsOptions = {
    credentials: true,
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error())
        }
    },
}
app.use(cors(corsOptions))

app.use(cookieParser())
app.use(express.json())

app.use(router)

app.use((err, req, res, next) => {
    if (err) {
        const status = err.status || err.response?.status || 500
        const message =
            err.message ||
            err.response?.data?.message ||
            JSON.stringify(err) ||
            'An unknown error occurred'
        res.status(status).send({ message })
    }
})

app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`))
