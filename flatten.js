
function flattenObjFn(source) {
    let obj = {};
    
    for(let key in source) {
        if(typeof source[key] === 'object') {
            let tempObj = source[key];
            let flattenObj = flattenObjFn(tempObj);
            for(let innerKey in flattenObj) {
                obj[key+'.'+ innerKey] = flattenObj[innerKey];
            }
            
        }else {
            obj[key] = source[key];
        }
    }
    return obj;
}

let obj = {
    a : {
        b : {
            z : 10,
            d : {
                e : 20,
            }
        },
    },
    x : 20,
}
const flateobj = flattenObjFn(obj)
console.log(flateobj)

