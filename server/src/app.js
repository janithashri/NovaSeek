const cors = require('cors');
const path = require('path');
const express = require('express');
const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router'); // Ensure the correct file path
const app = express();
const morgan = require('morgan');

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter); // Make sure this matches the router you're using

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
