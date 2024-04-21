 Promise.resolve("foo")
 .then((string) => {
     return new Promise(function (resolve,reject) {
         setTimeout(function timer1() {
             string += "baar"
             resolve(string)
         },1000)
     })
 })
 .then((string) => {
     setTimeout(function Timer2 () {
        string += "baaz"
        console.log(string)
     },1)
     return string
 })
 .then((string) => {
     console.log("Hello I am Atish Kushwaha")
     
     console.log(string)
 })
