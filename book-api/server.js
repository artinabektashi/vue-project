import {
    MONGO_CONNECTION_URI,
    MONGO_DB_NAME,
    API_PORT,
    MONGO_DB_PORT
} from './config';
import express from 'express';
import categoryRouter from './routes/categoryRoute';
import cors from 'cors';
import mongoose from 'mongoose';

mongoose.connect(`${MONGO_CONNECTION_URI}:${MONGO_DB_PORT}/${MONGO_DB_NAME}`).then(() => {
    console.log(`Connected to mongodb on port ${MONGO_DB_PORT}`);

    const PORT = 3000;

    const app = express();

    app.use(
        cors({
            origin: 'http://localhost:8080',
        })
    )

    app.use(express.urlencoded({ extended: true }))
    app.use(express.json());


    app.use('/categories', categoryRouter);

    app.get('/user', (req, res) => {
        return res.json({ name: 'John', age: 21 })
    })

    app.get('*', (req, res) =>  res.status(404).json({ content: 'not_found'}));

    app.listen(API_PORT, () => {
        console.log(`api port ${API_PORT}`)
    })
})