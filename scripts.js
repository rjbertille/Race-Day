let raceNumber = Math.floor(Math.random() * 1000);
const runner = true;
const ageRunner = 25;

if(ageRunner > 18 && runner) {
     raceNumber += 1000;
}

if(ageRunner > 18 && runner) {
  console.log("they will race at 9:30 am");
} else if(ageRunner < 18 && !runner == early) {
  console.log("they will race at 11:00am");
}else if(ageRunner < 18 && runner){
  console.log("they will race at 12:30pm");  
}
