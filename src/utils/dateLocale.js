export default (d)=>{
    let date = new Date(d)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    if (month < 10) {
        month = "0" + month
    }
    return year + "-" + month;
}