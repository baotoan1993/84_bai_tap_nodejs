var M = require("./newModule");
var arr = M.readFile();

var x = 5;

function demPhanTuXTrongMang(arr, x) {
    let count = 0;
    arr.forEach(n => {
        if (n == x)
            count++;
    });
    return count;
}

M.writeFile(28, demPhanTuXTrongMang(arr, x));