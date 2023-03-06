// const express = require('express');
import express from 'express';
import {ReasonPhrases, StatusCodes} from 'http-status-codes';
import categoriesRouter from './routes/categoriesRouter';
import cors from 'cors';

const PORT = 3000;
const app = express();

app.use(
    cors({
        origin: 'http://localhost:8080',
    })
)

app.use(express.urlencoded({extended:true}))
app.use(express.json());



app.get('/user', (req,res) =>{
    return res.json({name:'John', age:21})
})

app.use('/category', categoriesRouter);


app.get('*',(req,res) =>{
    return res.status(StatusCodes.NOT_FOUND).json({error: ReasonPhrases.NOT_FOUND})
})

app.listen(PORT, () =>{
    console.log(`api port ${PORT}`)
})