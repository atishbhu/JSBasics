console.log("Hii");

function setTimeOutWithLoop() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function exex() {
      console.log("Timer End");
    }, 1000);
  }
}
setTimeOutWithLoop();

console.log("Bye");

/*
output

Hii
Bye
Time End
Time End
Time End

*/