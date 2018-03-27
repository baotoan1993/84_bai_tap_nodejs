var M = require("./newModule");
var fs = require('fs');
var arr = M.readFile();

function demPhanTuAm(arr) {
    let count = 0;
    arr.forEach(x => {
        if (x < 0) {
            count++;
        }
    });
    return count;
}

function demPhanTuDuong(arr) {
    let count = 0;
    arr.forEach(x => {
        if (x >= 0) {
            count++;
        }
    });
    return count;
}

fs.appendFile('./output/Bai_26.out', 'So Luong Phan Tu Am: ' + demPhanTuAm(arr));
fs.appendFile('./output/Bai_26.out', '\n');
fs.appendFile('./output/Bai_26.out', 'So Luong Phan Tu Duong: ' + demPhanTuDuong(arr));