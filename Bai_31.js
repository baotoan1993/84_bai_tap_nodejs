var M = require("./newModule");
var fs = require('fs');
var arr = M.readFile();
function demPhanTuLaBoi(arr) {
    let count = 0;
    arr.forEach(x => {
        if (x % 3 == 0 && x % 5 == 0)
            count++;
    });
    return count;
}

function tinhTongSoChan(arr) {
    let sum = 0;
    arr.forEach(x => {
        if (x % 2 == 0)
            sum += parseInt(x);
    });
    return sum;
}

fs.appendFile("./output/Bai_31.out", "So luong Boi cua 3 va 5: " + demPhanTuLaBoi(arr) + " ---- ");
fs.appendFile("./output/Bai_31.out", "Tong so chan: " + tinhTongSoChan(arr));