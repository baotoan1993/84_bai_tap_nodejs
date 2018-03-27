var M = require("./newModule");
var arr = M.readFile();

function tinhTongChiaHetCho5(arr) {
    let sum = 0;
    arr.forEach(x => {
        if (x % 5 == 0)
            sum += parseInt(x);
    });
    return sum;
}

M.writeFile(36, tinhTongChiaHetCho5(arr));