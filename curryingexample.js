
function helper(operation) {
    return function(a) {
        return function(b) {
            if(operation == 'sum') {
                return a + b;
            }else if(operation == 'mul') {

                return a * b;
            }else if(operation == 'div') {
                return a / b;
            }else {
                return "Invalid operation";
            }
        }
    }
}

console.log(helper('sum')(2)(5));
console.log(helper('mul')(2)(5));
console.log(helper('div')(25)(5));
console.log(helper('abs')(2)(5));

