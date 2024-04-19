console.log("Hii");

function getRandomeInt(max) {
  return Math.floor(max * Math.random());
}

function createPromise() {
  return new Promise(function exect(resolve, reject) {
    setTimeout(function () {
      const num = getRandomeInt(10);

      if (num % 2 == 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 10000);
  });
}

const result = createPromise();

console.log(result);

console.log("end");
