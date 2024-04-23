function outerFunction () {
    
    function timerFunction (x) {
         setTimeout(function() {
            console.log(x)
        },1000 * x)
    }
    
    for(var i = 1; i <= 5; i++){
      timerFunction(i)
    }
}

outerFunction()

// function outerFunction () {
//     for(let i = 1; i <= 5; i++){
//       setTimeout(function() {
//             console.log(i)
//         },1000 * i)
//     }
// }

// outerFunction()

