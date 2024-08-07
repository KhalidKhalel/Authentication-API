import express from 'express';
import config from 'config';
import connectToDb from './utils/connectToDb';
import router from './routes';
import dotenv from 'dotenv';

// Load environment variables from a .env file into process.env
dotenv.config();

// Create an instance of an Express application 
const app = express();

app.use(express.json());

// Use the router
app.use(router);

// Retrieve the port number from the configuration settings
const port = config.get('port') || 3000;

// Start the Express server and listen on the specified port
app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`);
    connectToDb();
});
