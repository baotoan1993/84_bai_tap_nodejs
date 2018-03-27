var M = require("./newModule");
var arr = M.readFile();

function tinhTongViNguyenTo(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (M.kiemTraNguyenTo(i))
            sum += parseInt(arr[i]);
    }
    return sum;
}

M.writeFile(35, tinhTongViNguyenTo(arr));