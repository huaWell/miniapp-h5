let timeDiff = (diff_ms) => {

    let min = 60 * 1000;
    let hour = min * 60;
    let day = hour * 24;
    let week = day * 7;

    let intervalWeek = Math.floor(diff_ms / week);
    let intervalDay = Math.floor(diff_ms / day);
    let intervalHour = Math.floor(diff_ms / hour);
    let intervalMin = Math.floor(diff_ms / min);

    return {
        week: intervalWeek,
        day: intervalDay,
        hour: intervalHour,
        min: intervalMin
    }
}

export default timeDiff;