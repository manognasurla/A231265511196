function calculateBestSchedule(vehicleTasks, availableHours) {

    let bestImpact = new Array(availableHours + 1).fill(0);

    for (let task of vehicleTasks) {

        let hoursNeeded = task.Duration;
        let priorityScore = task.Impact;

        for (let currentHours = availableHours; currentHours >= hoursNeeded; currentHours--) {

            bestImpact[currentHours] = Math.max(
                bestImpact[currentHours],
                bestImpact[currentHours - hoursNeeded] + priorityScore
            );
        }
    }

    return bestImpact[availableHours];
}

module.exports = calculateBestSchedule;