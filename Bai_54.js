var M = require("./newModule");
var arr = M.readFile()
var x = 20;

function ChenXVaoSauGiaTriNguyenToDauTien(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (M.kiemTraNguyenTo(arr[i])) {
            arr.splice(i, 0, x);
            return;
        }
    }
}

ChenXVaoSauGiaTriNguyenToDauTien(arr, x);
M.writeFile(54, arr);