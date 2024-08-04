Array.prototype.myFlat = function () {
    let newArr = [];
    for(let i = 0; i < this.length; i++) {
        if(Array.isArray(this[i])) {
            let parentArr = this[i].myFlat()
            newArr = [...newArr,...parentArr];
        }else {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

let arr = [1,2,3,4,[6,7,8,[13,14,15]],5];
console.log(arr.myFlat())
