var M = require("./newModule");
var arr = M.readFile()

function TinhTongXungQuanh(arr) {
    let tong = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] == arr[i - 1] + arr[i + 1])
            tong += arr[i];
    }
    return tong;
}

M.writeFile(62, TinhTongXungQuanh(arr));