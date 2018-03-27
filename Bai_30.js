var M = require("./newModule");
var arr = M.readFile();

function kiemTraHoanThien(x) {
    let sum = 1;
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            sum += i;
        }
    }
    if (sum == x)
        return 1;
    return 0;
}

function demSoHoanThien(arr) {
    let count = 0;
    arr.forEach(x => {
        if (M.kiemTraHoanThien(x))
            count++;
    });
    return count;
}

M.writeFile(30, demSoHoanThien(arr));