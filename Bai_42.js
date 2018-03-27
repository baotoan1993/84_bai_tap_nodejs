var M = require("./newModule");
var arr = M.readFile()

function SapXepMangGiamDan(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (parseInt(arr[i]) < parseInt(arr[j])) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

    }
}

SapXepMangGiamDan(arr);
M.writeFile(42, arr);