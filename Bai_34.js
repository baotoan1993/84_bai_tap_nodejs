var M = require("./newModule");
var arr = M.readFile();

function tinhTongViTriChan(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 2) {
        sum += parseInt(arr[i]);
    }
    return sum;
}

M.writeFile(34, tinhTongViTriChan(arr));