/*------------------------------ Challenge Solution ------------------------------*/
function processData(input) {
    var sc = new Scanner(input);
    var matrix = sc.nextMatrix();

    debugger;
    var d1 = 0, d2 = 0;
    for (var i = 0; i < matrix.length; i++) {
        d1 += matrix[i][i];
        d2 += matrix[i][matrix.length - i - 1];
    }

    console.log(Math.abs(d1-d2));
}