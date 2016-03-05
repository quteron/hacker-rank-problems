/*------------------------------ Scanner ------------------------------*/
function Scanner(input) {
  this.input = input;
  this.tokens = input.split(/\s+/);
  this.pos = 0;
}

Scanner.prototype.next = function next() {
  return this.tokens[this.pos++];
};

Scanner.prototype.nextString = function nextString() {
  return String(this.next());
};

Scanner.prototype.nextNumber = function nextNumber() {
  return Number(this.next());
};

Scanner.prototype.hasNext = function hasNext() {
  return this.pos !== this.tokens.length;
};

Scanner.prototype.nextArray = function nextArray() {
  var size = this.nextNumber();
  var array = new Array(size);
  for (var i = 0; i < size; i++) {
    array[i] = this.nextNumber();
  }

  return array;
};

Scanner.prototype.nextArrayOfSize = function nextArray(size) {
    var array = new Array(size);
    for (var i = 0; i < size; i++) {
        array[i] = this.nextNumber();
    }

    return array;
};

Scanner.prototype.nextMatrix = function nextArray() {
  var size = this.nextNumber();
  var matrix = new Array(size);
  for (var i = 0; i < size; i++) {
    matrix[i] = new Array(size);
    for (var j = 0; j < size; j++) {
        matrix[i][j] = this.nextNumber();
    }
  }

  return matrix;
};

/*------------------------------ Read Input ------------------------------*/
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

/*------------------------------ Challenge Solution ------------------------------*/
function processData(input) {
   var sc = new Scanner(input);
} 
