var M = require("./newModule");
var arr = M.readFile()

function tinhTongPhanTuHoanThien(arr) {
    let sum = 0;
    arr.forEach(x => {
        if (M.kiemTraHoanThien(x))
            sum += parseInt(x);
    });
    return sum;
}

M.writeFile(40, tinhTongPhanTuHoanThien(arr))