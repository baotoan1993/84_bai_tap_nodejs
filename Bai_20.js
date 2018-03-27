var M = require("./newModule");
var arr = M.readFile();

function boiCuaHaiSo(arr) {
    var arrNew = [];
    arr.forEach(x => {
        if (x % 3 == 0 && x % 5 == 0) {
            arrNew.push(x);
        }
    });
    return arrNew;
}

M.writeFile(20, boiCuaHaiSo(arr));