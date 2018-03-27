var M = require("./newModule");
var arr = M.readFile();

function timSoLeLonNhat(arr) {
    var max = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            max = Math.max(arr[i], max);
        }
    }
    return max;
}

M.writeFile(22, timSoLeLonNhat(arr));