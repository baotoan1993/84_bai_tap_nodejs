var fs = require("fs");

function timViTriCuaXCuoiCung(arr, x) {
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] == x) {
            return i;
        }
    }
    return -1;
}

var x = 5;

var arr = fs.readFileSync("data.txt").toString().split(",");

console.log(timViTriCuaXCuoiCung(arr, x));

fs.writeFile("./output/Bai_11.out", "vi tri x cuoi cung: " + timViTriCuaXCuoiCung(arr, x));