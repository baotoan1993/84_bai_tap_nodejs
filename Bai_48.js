var M = require("./newModule");
var arr = M.readFile()

function XoaPhanTuViTriLe(arr) {
    for (let i = 1; i < arr.length; i += 2) {
        arr.splice(i, 1);
    }
}

XoaPhanTuViTriLe(arr);
M.writeFile(48, arr);