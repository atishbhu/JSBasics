

function compare(a,b) {
    
    if(!Array.isArray(a) && typeof a === 'object' && !Array.isArray(b) && typeof b === 'object') {
        let keya = Object.keys(a);
        let keyb = Object.keys(b);
        if(keya.length !== keyb.length) return false;
        
        for(let i = 0; i < keya.length; i++) {
            if(!b[keya[i]]) return false;
            
            if(!compare(a[keya[i]], b[keya[i]])) return false;
        }
        return true;
    }else if(Array.isArray(a) && Array.isArray(b)) {
        if(a.length !== b.length) return false;
        
        for(let i = 0; i < a.length; i++) {
            
            if(!compare(a[i], b[i])) return false;
        }
        
        return true;
    }else {
        return a === b;
    }
}

let a = {
  "object": [1, 2, 3, 4, 5, {
    "inside": [1, 2, 3, 4, 5],
  }, "23234", "23423", undefined],
  "string": 'stringe',
  [123.67]: [[],[],[undefined]]
}
// let b = {
//   "object": [1, 2, 3, 4, 5, {
//     "inside": [1, 2, 3, 4, 5],
//   }, "23234", "23423", undefined],
//   "string": 'stringe',
//   [123.67]: [[],[],[null]]
// };

let b = {
  "object": [1, 2, 3, 4, 5, {
    "inside": [1, 2, 3, 4, 5],
  }, "23234", "23423", undefined],
  "string": 'stringe',
  [123.67]: [[],[],[undefined]]
}
console.log(compare(a, b));

