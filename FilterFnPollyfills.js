let arr = [1,2,3,4,5,6];

Array.prototype.myFilter = function (logicFn) {
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
        if(logicFn(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}
function isEven (val) {
    if(val % 2 == 0) return true
    
    return false;
}

let EvenArray = arr.myFilter(isEven);
console.log(EvenArray)

