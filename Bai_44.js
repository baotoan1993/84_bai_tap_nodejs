var M = require("./newModule");
var arr = M.readFile()

function SapXepMangTangDanPhanTuLe(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j] && arr[i] % 2 != 0 && arr[j] % 2 != 0) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

    }
}

SapXepMangTangDanPhanTuLe(arr);
M.writeFile(44, arr);