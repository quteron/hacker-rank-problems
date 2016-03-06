/*------------------------------ Challenge Solution ------------------------------*/
function processData(input) {
    var sc = new Scanner(input);
    var t = sc.nextNumber();
    while(t > 0) {
        var a = sc.nextNumber();
        var b = sc.nextNumber();

        var min = Math.ceil(Math.sqrt(a));
        var max = Math.floor(Math.sqrt(b));
        console.log(max - min + 1);
        t--;
    }
}