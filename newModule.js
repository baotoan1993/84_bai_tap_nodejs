var randomFloat = require("random-float");
var fs = require('fs');
module.exports = {
    kiemTraNguyenTo: function (x) {
        if (x < 2)
            return false;
        if (x == 2)
            return true;
        for (let i = 2; i <= x / 2; i++) {
            if (x % i == 0)
                return 0;
        }
        return 1;
    },

    khoiTaoMangSoNguyen: function (arr) {
        for (let i = 0; i < 10; i++) {
            arr[i] = Math.floor(Math.random() * 200) - 100;
        }
    },

    khoiTaoMangSoThuc: function (arr, max, min, length) {
        for (let i = 0; i < length; i++) {
            arr[i] = randomFloat(-100, 100).toFixed(2);
        }
    },

    inMangSoNguyen: function (arr) {
        arr.forEach(x => {
            console.log(x);
        });
    },

    inMang: function (arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    },

    arrayMax: function (array) {
        return array.reduce((a, b) => Math.max(a, b));
    },

    arrayMin: function (array) {
        return array.reduce((a, b) => Math.min(a, b));
    },

    kiemTraHoanThien: function (x) {
        let sum = 1;
        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                sum += i;
            }
        }
        if (sum == x)
            return 1;
        return 0;
    },

    readFile() {
        var data = [];
        data = fs.readFileSync('data.txt').toString().split(',');
        for (let i = 0; i < data.length; i++) {
            data[i] = parseInt(data[i]);
        }
        return data;
    },

    writeFile(name, arr) {
        var outFile = './output/Bai_' + name.toString() + '.out';
        fs.writeFile(outFile, arr);
    }
}