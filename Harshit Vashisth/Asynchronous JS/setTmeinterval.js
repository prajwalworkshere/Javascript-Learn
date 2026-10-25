console.log("Statement 1 Printed");
console.log("Statement 3 Printed");

function delayed() {
  console.log("Statement 2 Printed (4 Seconds Delayed)");
}
setTimeout(delayed, 4000); // 4000 miliseconds => 4 seconds


// ================================================ Program 2 ==========================================================

console.log();
console.log();

console.log("Execution Started");
console.log("Statememt 1");

for(let i=0;i<4;i++){
    console.log("Inside Loop",i);
}

const id =setTimeout(()=>{
    console.log("inside SetTimeout()");
},3000);

console.log("Displaying SetTimeout ID:-",id);

clearTimeout(id);
console.log("See setTimeout Not Worked as we cleared it");



