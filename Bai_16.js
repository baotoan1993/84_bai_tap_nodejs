var Module = require("./newModule");
var arr = Module.readFile();

function timViTriPhanTuAmDauTien(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0)
            return i;
    }
    return -1;
}

Module.writeFile(16, timViTriPhanTuAmDauTien(arr));