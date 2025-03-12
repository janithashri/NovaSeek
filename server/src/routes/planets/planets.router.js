const express = require('express');
const { getAllPlanets } = require('./planets.controller');
const planetsRouter = express.Router();

// Since the base path is already /planets, avoid duplicating the /planets in the route
planetsRouter.get('/', getAllPlanets); 

module.exports = planetsRouter;
