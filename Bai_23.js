var M = require("./newModule");
var arr = M.readFile();

function arrayMax(array) {
    return array.reduce((a, b) => Math.max(a, b));
}

function doiChoPhanTuLonNhatNhoNhat(arr) {
    let max = M.arrayMax(arr);
    let min = M.arrayMin(arr);
    console.log("max: " + max);
    console.log("min: " + min);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == max) {
            arr[i] = min;
            continue;
        }
        if (arr[i] == min) {
            arr[i] = max;
            continue;
        }
    }
}

doiChoPhanTuLonNhatNhoNhat(arr);
M.writeFile(23, arr);