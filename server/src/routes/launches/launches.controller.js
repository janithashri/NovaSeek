const { getAllLaunches, addNewLaunch, existsLaunchWithId, abortLaunch } = require('../../models/launches.model'); // Ensure path is correct

function httpGetAllLaunches(req, res) {
    res.status(200).json(getAllLaunches());
}

function httpAddLaunch(req, res) {
    const launch = req.body;
    if (!launch.mission || !launch.launchDate || !launch.rocket || !launch.target) {
        return res.status(400).json({
            error: "Missing required launch property",
        });
    }
    launch.launchDate = new Date(launch.launchDate);
    if (launch.launchDate.toString() === 'Invalid Date') {
        return res.status(400).json({
            error: "Invalid launch date",
        });
    }
    addNewLaunch(launch); 
    return res.status(201).json(launch);
}

function httpAbortLaunch(req,res){
    const launchId=Number(req.params.id);

    if(!existsLaunchWithId(launchId)){
    return res.status(404).json({
        error:"launch not found",
    });
    }

    const aborted= abortLaunch(launchId);
    return res.status(200).json(aborted);
}

module.exports = {
    httpGetAllLaunches,
    httpAddLaunch,
    httpAbortLaunch
};
