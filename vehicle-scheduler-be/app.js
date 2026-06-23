const calculateBestSchedule = require("./scheduler");

const maintenanceTasks = [
    {
        Duration: 4,
        Impact: 7
    },
    {
        Duration: 3,
        Impact: 6
    },
    {
        Duration: 5,
        Impact: 10
    }
];

const totalMechanicHours = 8;

const answer = calculateBestSchedule(
    maintenanceTasks,
    totalMechanicHours
);

console.log("Best Impact Score:", answer);