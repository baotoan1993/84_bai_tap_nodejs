var M = require("./newModule");
var arr = M.readFile();

function tinhTongPhanTuLaBoiCua3Va5(arr) {
    let sum = 0;
    arr.forEach(x => {
        if (x % 3 == 0 && x % 5 == 0)
            sum += parseInt(x);
    });
    return sum;
}

M.writeFile(39, tinhTongPhanTuLaBoiCua3Va5(arr));