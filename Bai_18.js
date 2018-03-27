var M = require("./newModule");
var arr = M.readFile();

function viTriDuongDauTien(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0)
            return i;
    }
    return -1;
}

M.writeFile(18, viTriDuongDauTien(arr));