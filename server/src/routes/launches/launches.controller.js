const { getAllLaunches,addNewLaunch, } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    res.status(200).json(getAllLaunches());
}

function httpAddLaunch(req,res){
    const launch= req.body;
    if(!launch.mission || !launch.launchDate || !launch.rocket || !launch.destination){
        return res.status(400).json({
            error: "Missing required launch property",
        });
    }
    
    launch.launchDate= new Date(launch.launchDate);
    if(isNaN(launch.launchDate)){
        return res.status(400).json({
            error: "Invalid launch date",
        });
    }

    addNewLaunch(launch);

    return res.status(201).json(launch);
}

module.exports = {
    httpGetAllLaunches,
    httpAddLaunch,
};
