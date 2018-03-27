var fs = require("fs");

function viTriPhanTuLonNhat(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == max)
            return i;
    }
}

var arr = fs.readFileSync("data.txt").toString().split(",");
fs.writeFile("./output/Bai_13.out", "phan tu lon nhat co vi tri: " + viTriPhanTuLonNhat(arr));