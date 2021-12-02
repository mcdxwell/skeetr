import "reflect-metadata";
import {createConnection} from "typeorm";

import visitorRoutes from './routes/visitors'
import statsRoutes from './routes/stats'

import express from 'express';

import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config()
const app = express();
const PORT = process.env.PORT

app.use(express.json())

app.use(morgan('dev'))

app.get('/', (request, response) => response.send('Hello, world!'))
app.use('/api/visitors', visitorRoutes)
app.use('/api/stats', statsRoutes)
app.listen(PORT, async () => {

    console.log(`Server running at http://localhost:${PORT}`)

    try {
        await createConnection()
        console.log('Database connected!')
    } catch(error) {
        console.log(error)
    }
})
