function processData(input) {
    var scanner = new Scanner(input);
    var t = scanner.nextNumber();

    while(t > 0) {
        var array = scanner.nextArray();
        var left = 0;
        var right = array.reduce((i, s) => {return i + s;}, 0);

        var result = "NO";
        for(var i of array) {
            if(left === (right - i)) {
                result = "YES";
                break;
            } else {
                left += i;
                right -= i;
            }
        }

        console.log(result);
        t--;
    }
}
