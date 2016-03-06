/*------------------------------ Challenge Solution ------------------------------*/
function processData(input) {
    var sc = new Scanner(input);
    var t = sc.nextNumber();
    while(t > 0) {
        var value = sc.nextString();
        var digits = value.split("").map(Number);
        var number = new Number(value);
        var result = digits.reduce(function(count, digit) {
            return number % digit === 0 ? count + 1 : count;
        }, 0);
        console.log(result);

        t--;
    }
}