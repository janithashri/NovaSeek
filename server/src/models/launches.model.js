const launches = new Map();

function existsLaunchWithId(launchId){
    return launches.has(launchId);
}

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler',
    rocket: 'janiths',
    launchDate: new Date('December 27, 2030'), 
    target: 'Kepler-442 b',
    customer: ['ZTM'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches(){
    return Array.from(launches.values());
}

function addNewLaunch(launch){
    latestFlightNumber += 1;
    launches.set(latestFlightNumber, Object.assign(launch, {
           flightNumber: latestFlightNumber,
           customer: ['ISRO'],
           upcoming: true,
           success: true,
    }));
    console.log(`set ${launch}`);
}

function abortLaunch(launchId){
    const aborted= launch.get(launchId);
    aborted.upcoming=false;
    aborted.success=false;
    return aborted;
}

module.exports = {
    addNewLaunch,
    getAllLaunches,
    existsLaunchWithId,
    abortLaunch,
};
