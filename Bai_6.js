var M = require('./newModule');
var arr = M.readFile()
var arrNew = []
arr.forEach(x => {
    if (x % 2 != 0) {
        arrNew.push(x);
    }
});

M.writeFile(6, arrNew);