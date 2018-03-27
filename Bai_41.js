var M = require("./newModule");
var arr = M.readFile()

function tinhTrungBinhPhanTuHoanThien(arr) {
    let sum = 0;
    let count = 0;
    arr.forEach(x => {
        if (M.kiemTraHoanThien(x)) {
            sum += x;
            count++;
        }

    });
    if (count == 0)
        return "Khong co so hoan thien";
    return sum / count;
}

M.writeFile(41, tinhTrungBinhPhanTuHoanThien(arr));