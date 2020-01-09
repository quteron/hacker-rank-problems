(function() {
    "use strict";

    function Insertion() {}

    Insertion.sort = function(array) {
        for (var i = 1; i < array.length; i++) {
            var item = array[i];
            for (var j = i - 1; j >= 0; j--) {
                if (array[j] > item) {
                    array[j + 1] = array[j];
                    continue;
                } else if (j + 1 != i) {
                    array[j + 1] = item;
                }

                break;
            }

            if (j < 0 && (j + 1 != i)) {
                array[j + 1] = item;
            }
        }
    };

    Insertion.print = function(array) {
        console.log(array.join(" "));
    };
}());