var M = require("./newModule");
var arr = M.readFile()

var k = 3;

function SapXepMangGiamDan(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

    }
}

SapXepMangGiamDan(arr);

M.writeFile(58, arr[k]);