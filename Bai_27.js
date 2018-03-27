var M = require("./newModule");
var arr = M.readFile();
var fs = require('fs');

function demPhanTuChan(arr) {
    let count = 0;
    arr.forEach(x => {
        if (x % 2 == 0) {
            count++;
        }
    });
    return count;
}

function demPhanTuLe(arr) {
    let count = 0;
    arr.forEach(x => {
        if (x % 2 != 0) {
            count++;
        }
    });
    return count;
}

fs.appendFile('./output/Bai_27.out', 'So Luong Phan Tu Chan: ' + demPhanTuChan(arr));
fs.appendFile('./output/Bai_27.out', '---');
fs.appendFile('./output/Bai_27.out', 'So Luong Phan Tu Le: ' + demPhanTuLe(arr));