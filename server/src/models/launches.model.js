const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: 'Kepler',
    rocket: 'janiths',
    launchDate: new Date('December 27, 2030'), // Corrected to new Date
    destination: 'Kepler-442 b',
    customer: ['ZTM'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
    launches,
};
