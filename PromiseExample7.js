
function download(url) {
    return new Promise(function exec(resolve,reject) {
        console.log("start downloading from ..",url)
        setTimeout(function timer1() {
            console.log("download done")
            const content = "ABCDEF"
            reject(content)
        },6000)
    })
}

download("www.xyz.com")
.catch((err) => console.log('err',err))

/*
when promise is reject it will go in catch block with passed value and rejected state
*/

