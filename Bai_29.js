var M = require("./newModule");
var arr = M.readFile();

var x = 20;

function demPhanTuNhoHonX(arr, x) {
    let count = 0;
    arr.forEach(n => {
        if (n < x)
            count++;
    });
    return count;
}
M.writeFile(29, demPhanTuNhoHonX(arr, x));