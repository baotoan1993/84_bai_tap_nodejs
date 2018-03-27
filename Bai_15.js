var Module = require("./newModule");
var arr = Module.readFile();
var arrNew = [];
arr.forEach(function (x) {
    if (Module.kiemTraNguyenTo(x) && x > 23) {
        arrNew.push(x);
    }
});

Module.writeFile(15, arrNew);