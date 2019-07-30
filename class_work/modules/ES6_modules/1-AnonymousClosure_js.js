// Any variables declared inside the IIFE are not visible to the outside world.

(function () {
  // We keep these variables private inside this closure scope
  
  let myGrades = [93, 95, 88, 0, 55, 91];
  
  let average = function() {
    let total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item}, 0);
    
      return 'Your average grade is ' + total / myGrades.length + '.';
  }

  let failing = function(){
    let failingGrades = myGrades.filter(function(item) {
      return item < 70;});
      
    return 'You failed ' + failingGrades.length + ' times.';
  }

  console.log(failing());     // 'You failed 2 times.'

}());

// ‘You failed 2 times.’

// console.log(failing()); // variables and functions are hidden from the parent (global) namespace.

// we can use local variables inside this function without accidentally overwriting existing global variables, 
// yet still access the global variables

const global = 'Hello, I am a global letiable :)';

(function () {
  // We keep these variables private inside this closure scope
  
  let myGrades = [93, 95, 88, 0, 55, 91];
  
  let average = function() {
    let total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item}, 0);
    
    return 'Your average grade is ' + total / myGrades.length + '.';
  }

  let failing = function(){
    let failingGrades = myGrades.filter(function(item) {
      return item < 70;});
      
    return 'You failed ' + failingGrades.length + ' times.';
  }

  const global = "Blah!";

  console.log(failing());   // 'You failed 2 times.'
  console.log(global);      // Blah!
}());

console.log(global);        // 'Hello, I am a global letiable :)'
