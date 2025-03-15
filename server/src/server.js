const http = require('http');
const mongoose = require('mongoose'); 
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model'); 
require('dotenv').config();  // Make sure to install and use dotenv for environment variables

const PORT = 8000;
const MONGO_URL = process.env.MONGO_URL;  // Store the MongoDB URL in an environment variable

const server = http.createServer(app);

async function startServer() {
    try {
        await mongoose.connect(MONGO_URL);  // Using await for the connection
        console.log('MongoDB connected successfully');

        await loadPlanetsData();  // Load the planet data
        
        server.listen(PORT, () => {
            console.log(`Listening on port: ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to load planet data or start server:', error);
    }
}

startServer();
