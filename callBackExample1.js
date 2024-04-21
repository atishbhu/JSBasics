function downloadFiles(url, saveDataToFile) {
    console.log("Downloading started ...", url)
    setTimeout(function download(url) {
        console.log("Download done")
        saveDataToFile("downloaded data",function () {
            console.log("uploading to new url")
            setTimeout(function () {
                console.log("uploaded file to new url")
            },1000)
        })
    },5000)
}

function saveDatainFile(data,cb) {
    console.log("saving data in file ...", data)
    setTimeout(function (){
        console.log("data saved in file")
        cb()
    },2000)
}

downloadFiles("www.xyz.com", saveDatainFile)
