

// function fn() {
//     console.log('hi',this);
// }

// let ironMan = {
//     name : 'Atish',
// }

// fn.call(ironMan) // hi {name : 'Atish'}

// Array.prototype.sum = function() {
//     let sum = 0;
//     for(let i = 0; i < this.length; i++) {
//         sum += this[i];
//     }
//     return sum;
// }

// let arr = [1,2,3,4,5];

// console.log(arr.sum());

let obj = {
    name : 'Atish',
    sayHi: function (...args) {
        console.log('Hello ', this.name,args)
    },
    adress : {
        sector: 7,
        myCall : function() {
            console.log(this);
        }
    }
}

let ironMan = {
    name : 'IronMan',
}

// obj.sayHi("Atish","Satish"); // Hello Atish
// obj.sayHi.call(ironMan); // Hello IronMan

// obj.adress.myCall()

Function.prototype.myCall = function(obj,...args) {
    console.log(this,obj);
    obj.tempMethod = this;
    obj.tempMethod(...args);
    delete obj.tempMethod;
}

// obj.sayHi.myCall(ironMan,"param1","param2")

Function.prototype.myApply = function(obj,args) {
    console.log(this,obj);
    obj.tempMethod = this;
    obj.tempMethod(...args);
    delete obj.tempMethod;
}

// obj.sayHi.myApply(ironMan,["Atish","param2"])

Function.prototype.myBind = function(obj) {
    let myFn = this;
    return function(...args) {
        obj.tempMethod = myFn;
        obj.tempMethod(...args);
        delete obj.tempMethod
    }
}
const customeBound = obj.sayHi.myBind(ironMan);
customeBound("A","B","C");
const boundFn = obj.sayHi.bind(ironMan);
boundFn("p","q");

