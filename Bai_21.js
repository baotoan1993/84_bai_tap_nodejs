var M = require("./newModule");
var arr = M.readFile();

function soChanCuoiCung(arr) {
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] % 2 == 0) {
            return arr[i];
        }
    }
    return -1;
}

M.writeFile(21, soChanCuoiCung(arr));