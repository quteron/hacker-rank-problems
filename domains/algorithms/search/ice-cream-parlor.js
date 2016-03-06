/*------------------------------ Challenge Solution ------------------------------*/
function processData(input) {
    var scanner = new Scanner(input);
    var t = scanner.nextNumber();

    while(t > 0) {
        var m = scanner.nextNumber();
        var array = scanner.nextArray();

        for(var i = 0; i < array.length; i++) {
            var a = array[i];

            for(var j = i + 1; j < array.length; j++) {
                var b = array[j];
                if(a + b === m) {
                    console.log([i + 1, j + 1].join(" "));
                    break;
                }
            }
        }
        t--;
    }
}