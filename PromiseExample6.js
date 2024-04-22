
function download(url) {
    return new Promise(function exec(resolve,reject) {
        console.log("start downloading from ..",url)
        setTimeout(function timer1() {
            console.log("download done")
            const content = "ABCDEF"
            resolve(content)
        },6000)
    })
}

function writeToFile(data) {
    return new Promise(function p2(resolve,reject) {
        console.log("started writting in file data ..",data)
        setTimeout(function timer2(){
            console.log("data has been written")
            const fileName = "file.text"
            resolve(fileName)
        },1000)
    })
}

function uploadFile(file,url) {
    return new Promise(function p3(resolve,reject) {
        console.log("start uploading to ", url)
        setTimeout(function timer3() {
            console.log("upload done")
            const response = "SUCCESSFULL"
            resolve(response)
        },2000)
    })
}

download("www.xyz.com")
.then((data) => {
    console.log("downloading with the value, ", data)
    return writeToFile(data)
})
.then((val) => {
    console.log("writing with value", val)
    return uploadFile(val,"www.abc.com")
}).then((res) => {
    console.log("uploaded data ", res)
})
