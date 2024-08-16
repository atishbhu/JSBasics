function sum (acc, ele) {
    return acc + ele;
}

Array.prototype.myReduce = function (cb,defaultValue) {
    let acc = defaultValue;
    for(let i = 0; i < this.length; i++) {
        acc = cb(acc, this[i]);
    }
    return acc;
}

let arr = [1,2,3,4,5];
console.log(arr.reduce(sum,0));
console.log(arr.myReduce(sum,0));

