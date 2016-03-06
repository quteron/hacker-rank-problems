/*------------------------------ Challenge Solution ------------------------------*/
function processData(input) {
    var sc = new Scanner(input);
    var array = sc.nextArray();

    var z = 0, p = 0, m = 0;
    for(var item of array) {
        if(item > 0) {
            p++;
        } else if (item < 0) {
            m++;
        } else {
            z++;
        }
    }

    console.log(p/array.length);
    console.log(m/array.length);
    console.log(z/array.length);
}