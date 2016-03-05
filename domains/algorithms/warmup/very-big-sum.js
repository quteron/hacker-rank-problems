function processData(input) {
    var sc = new Scanner(input);
    var array = sc.nextArray();
    var sum = array.reduce((item, sum) => {return item + sum}, 0);
    console.log(sum)
}