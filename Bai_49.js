var M = require("./newModule");
var arr = M.readFile()

function XoaPhanTuLonNhat(arr) {
    let max = arr[0];
    arr.forEach(x => {
        max = Math.max(max, x);
    });

    console.log("max la: " + max);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == max) {
            arr.splice(i, 1);
        }
    }
}
XoaPhanTuLonNhat(arr);
M.writeFile(49, arr);