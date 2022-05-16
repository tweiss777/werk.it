import express from 'express'
import { Express } from 'express'
import 'dotenv/config';


const PORT = process.env.PORT

const app: Express = express()


app.listen(PORT,() =>{
    console.log(`Listeing on port ${PORT}`);
})

