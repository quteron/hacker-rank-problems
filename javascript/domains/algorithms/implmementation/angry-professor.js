/*------------------------------ Challenge Solution ------------------------------*/
function processData(input) {
    var sc = new Scanner(input)
    var t = sc.nextNumber();
    while(t > 0) {
        var n = sc.nextNumber();
        var k = sc.nextNumber();
        var arrives = sc.nextArray(n);

        var counter = 0;
        for(var arrive of arrives) {
            if(arrive <= 0) {
                counter++;
            }
        }

        console.log(counter >= k ? "NO" : "YES");
        t--;
    }
}
