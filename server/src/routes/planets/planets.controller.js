const { planets } = require('../../models/planets.model'); // Ensure planets is exported correctly

function getAllPlanets(req, res) {
    return res.status(200).json(planets); // Send the planets data as the response
}

module.exports = { getAllPlanets };
