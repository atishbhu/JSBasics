
console.log("Start the file") 

setTimeout(function Timer1(){
   console.log("timer 1 completed") 
},0)

const x = Promise.resolve("Atish Promise");

x.then(function resoleHandler(val) {
    console.log("Whose Promise : ", val)
})

setTimeout(function timer2(){
   console.log("time 2 completed") 
},0)

console.log("End of file") 
