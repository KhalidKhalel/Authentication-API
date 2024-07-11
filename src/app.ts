// Loading enviorment variables from a .env file into process.env
require('dotenv').config

//Importing the Express framework for building wen applications
import express from 'express'

//Importing the config module to manage application configurations
import config from 'config'
import connectToDb from './utils/connectToDb'

// Created an instance of an Express application 
const app = express()

//Retrieved the port number from the configuration settings
const port = config.get('port')

// Here I started the express server and listen on the specified port
app.listen(port, () => {
    //printing out a message to the terminal showing that the server does indeed work
    console.log(`App started at https://localhost:${port}`);

    connectToDb();
});