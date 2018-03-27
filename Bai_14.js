var M = require("./newModule");
var arr = Array();
arr = M.readFile();

var arrIdx = [];
for (let i = 0; i < arr.length; i++) {
    if (M.kiemTraNguyenTo(arr[i])) {
        arrIdx.push(i);
    }
}

M.writeFile(14, arrIdx);
