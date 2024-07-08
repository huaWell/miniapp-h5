export default (d) => {
    var now = new Date(parseFloat(d));
    var year=now.getFullYear();
    var month=now.getMonth()+1;
    var date=now.getDate();
    if (month >= 1 && month <= 9) {
    month = "0" + month;
    }
    if (date >= 0 && date <= 9) {
    date = "0" + date;
    }
    var hour=now.getHours();
    var minute=now.getMinutes();
    var second=now.getSeconds();
    if (hour >= 1 && hour <= 9) {
    hour = "0" + hour;
    }
    if (minute >= 0 && minute <= 9) {
    minute = "0" + minute;
    }
    if (second >= 0 && second <= 9) {
    second = "0" + second;
    }
    return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
}