var fs = require("fs");
var data = fs.readFileSync("data.txt");
arr = data.toString().split(",");
var oddArr = []
arr.forEach(x => {

    if (x % 2 == 0 && x < 20) {
        oddArr.push(x);
    }
});

fs.writeFile("./output/Bai_7.out", oddArr);