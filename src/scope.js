'use strict'; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode


//x = 'this is an error';

(function() {
  var secret_api_key="stuff"
  console.log("this is a closure");
})();

var no_so_secret_key = 'SECRET'

//legit, would seem to be intutive coming from block based scoping. 
function whatUp() {
  var name = "BJK"
  console.log(name);
}
var name = "NOT BJK"
console.log(name);

whatUp();
console.log(name);

//not so legit, what's going on? 
function waitWhat() {
  if (true) {
    //okay we are in a block
    (function() {
      var name = 'Hoisting!';
    })();
  }
  console.log(name);
}
waitWhat();
console.log(name);



function hoisted() {
  var name;
  console.log(name);
  name = "BJK";
  console.log(name);
}




window.songTitle = "Graceland";

/*
var hellowWorld= function() {
  return "Hello WOrld";
}
*/
function hellowWorld() {
  return "Hello WOrld";
}


//make a funciton
//
//make a "gloabl variable"
//
//change variable inside funciton
//
//make variable in funciton scope, confirm it doesn't 
//change outside

