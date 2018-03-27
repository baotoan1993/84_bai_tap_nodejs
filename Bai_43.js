var M = require("./newModule");
var arr = M.readFile()

function SapXepMangTangDanNguyenTo(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (parseInt(arr[i]) > parseInt(arr[j]) && M.kiemTraNguyenTo(parseInt(arr[i])) && M.kiemTraNguyenTo(parseInt(arr[j]))) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

    }
}
SapXepMangTangDanNguyenTo(arr);
M.writeFile(43, arr);