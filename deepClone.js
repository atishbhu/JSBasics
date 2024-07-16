// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function deepClone(source) {
    let obj = Array.isArray(source)? [] : {};
    for(let key in source) {
        if(Array.isArray(source[key])) {
            let tempArray = [...source[key]];
            for(let i = 0; i < tempArray.length; i++) {
                if(typeof tempArray[i] === 'object') {
                    tempArray[i] = deepClone(tempArray[i]);
                }
            }
            obj[key] = tempArray;
        }
        else if(typeof source[key] === 'object') {
          let tempObj = deepClone(source[key]);
          obj[key] = tempObj;
        }else{
            obj[key] = source[key];
        }
    }
    
    return obj;
}

// function deepClone(source) {
//     if (source === null || typeof source !== 'object') {
//         return source;
//     }
    
//     let obj = Array.isArray(source) ? [] : {};

//     for (let key in source) {
//         if (source.hasOwnProperty(key)) {
//             obj[key] = deepClone(source[key]);
//         }
//     }
    
//     return obj;
// }


let obj = {
    x: 1,
    y : {
        z : {
            a : 10,
        }
    },
    f:[[1,2,{c : 10}]]
}

const cloneObj = deepClone(obj);
obj.f[0] = 'Atish'

console.log(cloneObj);
