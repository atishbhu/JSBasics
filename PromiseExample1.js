
function fetchData(url) {
    return new Promise((resolve,reject) => {
        console.log("downloading data from ", url)
        
        
        setTimeout(function execu(){
            let DummData = "Dummy Data"
            console.log("Downloaded completed")
            resolve(DummData)
        },7000)
    })
}

console.log("start")
const p = fetchData("xyz")

p.then((function exec(val) {
    console.log("value is ", val)
}))
console.log("End")
