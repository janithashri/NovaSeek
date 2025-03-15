const http = require('http');
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model'); 

const PORT = 8000;
const server = http.createServer(app);

async function startServer() {
    try {
        await loadPlanetsData(); 
        server.listen(PORT, () => {
            console.log(`Listening on port: ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to load planet data or start server:', error);
    }
}

startServer();
