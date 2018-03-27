var M = require("./newModule");
var arr = M.readFile();

function viTriDuongBeNhat(arr) {
    let max = Math.max(...arr);

    let min = max;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > 0 && arr[j] > 0) {
                min = Math.min(arr[i], arr[j]);
            }
        }
    }
    return arr.indexOf(min.toString());

}

M.writeFile(19, viTriDuongBeNhat(arr));