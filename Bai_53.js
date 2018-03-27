var M = require("./newModule");
var arr = M.readFile()
var x = 20;

function ChenXVaoSauGiaTriLonNhat(arr, x) {
    let max = arr[0];
    arr.forEach(m => {
        max = Math.max(max, m);
    });

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == max) {
            arr.splice(i + 1, 0, x);
        }
    }
}

ChenXVaoSauGiaTriLonNhat(arr, x);
M.writeFile(53, arr);