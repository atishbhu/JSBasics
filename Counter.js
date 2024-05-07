
function makeCounter (initialValue = 0) {
    let count = initialValue || 0;
    
    return function counter() {
        console.log(count)
        count++;
    }
}

const counter = makeCounter();
counter();
counter();
counter();

const counter2 = makeCounter(5);
counter2();
counter2();
counter2();

