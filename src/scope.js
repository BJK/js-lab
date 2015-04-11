'use strict'; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode


//x = 'this is an error';

(function() {

  console.log("this is a closure");

})();

//legit, would seem to be intutive coming from block based scoping. 
function whatUp() {
  var name = "BJK"
  console.log("BJK");
}
var name = "NOT BJK"
console.log(name);

whatUp();

//not so legit, what's going on? 
function waitWhat() {
  if (true) {
    //okay we are in a block
    var name = 'Hoisting!';
  }
  console.log(name);
}
waitWhat();
