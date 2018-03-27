var fs = require("fs");


fs.readFile("data.txt", function(err, data) {
    var arr = data.toString().split(",");
    console.log(arr);
    var under0Arr = [];
    arr.forEach(x => {
        if (x < 0) {
            under0Arr.push(x);
        }
    });

    fs.writeFile("./output/Bai_5.out", under0Arr);
});