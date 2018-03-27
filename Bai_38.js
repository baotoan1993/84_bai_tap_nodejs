var M = require("./newModule");
var arr = M.readFile();

function tinhTongPhanTuCucTieu(arr) {
    let sum = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])
            sum += parseInt(arr[i]);
    }
    return sum;
}

M.writeFile(38, tinhTongPhanTuCucTieu(arr));