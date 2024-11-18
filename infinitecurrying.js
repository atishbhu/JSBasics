function add (a) {
    return function(b) {
        if(b != undefined) {
            return add(a+b);
        }else {
            return a;
        }
    }
}

console.log(add(2)(3)(5)(25)(50)(100)())
