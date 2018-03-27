var M = require("./newModule");
var arr = M.readFile()
var x = 20;

function XoaPhanTuNhoHonX(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        let st = i;
        if (arr[i] < x) {
            arr.splice(i, 1);
            i = st - 1;
        }
    }
}

XoaPhanTuNhoHonX(arr, x);
M.writeFile(50, arr);