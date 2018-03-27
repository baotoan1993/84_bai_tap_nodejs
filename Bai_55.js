var M = require("./newModule");
var arr = M.readFile()
var x = 20;

Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

function ChenXVaoSauGiaTriChan(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        let st = i;
        if (arr[i] % 2 == 0) {
            arr.insert(i + 1, x);
            i++;
        }
    }
}

ChenXVaoSauGiaTriChan(arr, x);
M.writeFile(55, arr);