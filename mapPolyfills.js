Array.prototype.myMap = function (logicFn) {
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
        newArray[i] = logicFn(this[i]);
    }
    return newArray;
}

function sqaure(val) {
    return val * val;
}

let arr = [1,2,3,4,5,6];

let squArray = arr.myMap(sqaure);
let squArray2 = arr.map(sqaure);

console.log(squArray)
console.log(squArray2);

