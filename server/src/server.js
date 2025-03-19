const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');
require('dotenv').config();

const PORT = 8000;
const MONGO_URL = process.env.MONGO_URL;

const server = http.createServer(app);

async function startServer() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('MongoDB connected successfully');

        await loadPlanetsData();  
        console.log('Planet data loaded successfully');

        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error in server startup:', error);
        process.exit(1);  // Ensure the process exits if there is a fatal error
    }
}

startServer();
