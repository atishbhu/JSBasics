
function blacking_for_loop() {
    for(let i = 0; i < 10000000000; i++) {
        // somethings done
    }
}
console.log("start of the file")
setTimeout(function Timer1(){
   console.log("timer 1 completed") 
},0)

blacking_for_loop()

const x = Promise.resolve("Atish Promise 1");

x.then(function resoleHandler(val) {
    console.log("Whose Promise : ", val)
    blacking_for_loop()
})

const y = Promise.resolve("Atish Promise 2");

y.then(function resoleHandler(val) {
    console.log("Whose Promise : ", val)
    setTimeout(function Timer1(){
   console.log("ok done") 
},0)
})

const z = Promise.resolve("Atish Promise 3");

z.then(function resoleHandler(val) {
    console.log("Whose Promise : ", val)
})


setTimeout(function timer2(){
   console.log("time 2 completed") 
},0)

console.log("End of file") 
