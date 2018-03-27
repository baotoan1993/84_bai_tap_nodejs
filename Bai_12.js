var fs = require("fs");

function viTriPhanTuNhoNhat(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == min)
            return i;
    }
}

var arr = fs.readFileSync("data.txt").toString().split(",");



fs.writeFileSync("./output/Bai_12.out", "vi tri phan tu nho nhat: " + viTriPhanTuNhoNhat(arr));