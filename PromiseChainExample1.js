function createPromise() {
    return new Promise(function exec(res,rej) {
        setTimeout(function () {
            console.log("resolving promise ...")
            res("Promise resolved")
        },1000)
    })
}

const x = createPromise()

x.then(function resolveHandler(val) {
    console.log("resolve the promise with value ", val)
    return "Promise 2" 
},function rejectHandler(val) {
    console.log("reject the promise with value ", val)
}).then((res) => {
    console.log("promise 2 with value ", res);
})
