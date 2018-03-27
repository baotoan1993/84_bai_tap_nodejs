var M = require("./newModule");
var arr = M.readFile();

function tinhTongNguyenTo(arr) {
    let sum = 0;
    arr.forEach(x => {
        if (M.kiemTraNguyenTo(x)) {
            sum += parseInt(x);
        }
    });
    return sum;
}

M.writeFile(33, tinhTongNguyenTo(arr));