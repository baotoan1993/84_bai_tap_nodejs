var M = require("./newModule");
var arrA = [];
var arrB = [];
M.khoiTaoMangSoThuc(arrA, 100, -100, 100);
M.khoiTaoMangSoThuc(arrB, 100, -100, 50);

function kiemTraTonTaiTrongMang(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x)
            return 1;
    }
    return 0;
}

console.log("chi xuat hien trong day A, nhung khong co trong B");
arrA.forEach(x => {
    if (!kiemTraTonTaiTrongMang(arrB, x)) {
        console.log(x);
    }
});

console.log("xuat hien trong day A va B");
arrA.forEach(x => {
    if (kiemTraTonTaiTrongMang(arrB, x)) {
        console.log(x);
    }
});