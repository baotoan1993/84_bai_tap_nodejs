var M = require("./newModule");
var arr = M.readFile()
var x = 20;

function KiemTraPhanTuGanXNhat(arr, x) { // 7 -9 6 -13 27
    let closet = Math.abs(x - Math.abs(arr[0])); //13
    let ele = arr[0]; //7
    arr.forEach(n => { //7
        if (Math.abs(x - Math.abs(n)) < closet) {
            closet = Math.abs(x - Math.abs(n));
            ele = n;
        }
    });

    return ele;
}

function XoaPhanTuGanXNhat(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        let pos = i;
        if (arr[i] == KiemTraPhanTuGanXNhat(arr, x)) {
            arr.splice(i, 1);
            i = pos - 1;
        }
    }
}

XoaPhanTuGanXNhat(arr, x);
M.writeFile(51, arr);