console.log("Hii");

function getRandomeInt(max) {
  return Math.floor(max * Math.random());
}

function createPromise() {
  return new Promise(function exect(resolve, reject) {
    const num = getRandomeInt(10);

    if (num % 2 == 0) {
      return num;
    } else {
      return num;
    }
  });
}

const result = createPromise();

console.log(result);

console.log("end");
