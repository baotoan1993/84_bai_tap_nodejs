var fs = require("fs");

function kiemTraChinhPhuong(n) {
    if (n <= 0)
        return 0;
    for (let i = 0; i <= Math.sqrt(n); i++) {
        if (i * i == n)
            return 1;
    }
    return 0;
}

var data = fs.readFileSync("data.txt");
var arr = data.toString().split(",");

for (let i = 1; i < arr.length; i += 2) {
    if (kiemTraChinhPhuong(arr[i])) {
        fs.appendFile("./output/Bai_10.out", arr[i] + " ");
    }

}