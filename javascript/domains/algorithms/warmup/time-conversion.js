/*------------------------------ Challenge Solution ------------------------------*/
function processData(input) {
    var sc = new Scanner(input);
    var time = sc.nextString();

    var flag = time.substr(-2, 2);
    var hours = Number(time.slice(0, 2));

    if(flag === "PM") {
        if(hours === 12) {
            console.log(time.slice(0, -2));
        } else {
            console.log((hours + 12) + time.slice(2).slice(0, -2));
        }
    } else {
        if(hours === 12) {
            console.log("00" + time.slice(2).slice(0, -2));
        } else {
            console.log(time.slice(0, -2));
        }
    }
}