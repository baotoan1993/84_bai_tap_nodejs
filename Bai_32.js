var M = require("./newModule");
var arr = M.readFile();


function tinhTongSoLe(arr) {
    let sum = 0;
    arr.forEach(x => {
        if (x % 2 != 0)
            sum += parseInt(x);
    });
    return sum;
}

M.writeFile(32, tinhTongSoLe(arr));