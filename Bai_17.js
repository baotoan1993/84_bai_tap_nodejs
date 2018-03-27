var M = require("./newModule");
var arr = M.readFile();

function timViTriAmLonNhat(arr) {
    let checkKhongAm = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            checkKhongAm = false;
            break;
        }
    }
    if (checkKhongAm == true) {
        return -1;
    }

    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            max = arr[i];
            break;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            max = Math.max(arr[i], max);
        }
    }
    return arr.indexOf(max.toString());
}

M.writeFile(17, timViTriAmLonNhat(arr));