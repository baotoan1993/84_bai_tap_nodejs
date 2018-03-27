var M = require("./newModule");
var arr = M.readFile()

function SapXep(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < 0 && arr[i] < 0 && arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            if (arr[j] > 0 && arr[i] > 0 && arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

SapXep(arr);
M.writeFile(47, arr);