'use scrict';
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

//JavaScript objects are dynamic "bags" of properties (referred to as own properties)

var person = {
  name: 'BJK',
  age: '21',
  // functions are NO different than properties (unlike ruby or java).
  greeting: function() {
    return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
  }
}

console.log(person.name);
console.log(person.greeting());

//try just using person.greeting

var you = Object.create(person);
//set a property, what happens? 


function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v){
    this.vertices.push(v);
  }
};

var g = new Graph() ;
//Object.getPrototypeOf(Graph)
//Object.getPrototypeOf(g);


//different function styles
//
function firstWay(name) {
  return "Hello " + name;
}

var secondWay= function(name) {
  return "Hello " + name;
}

//constructors are functions
function Person (name, age) {
  this.name = name;
  this.age = age;
  this.greeting = function() { return "Hi I am " + this.name };
}

Person.prototype = {
  drinkingAge: 21,
  canDrink: function(){ 
    if (this.age >= this.drinkingAge)
      return true
    else
      return false
  }
}

//mess with the prototype
//Person.prototype.drinkingAge = 15

/* "inheritance,"" not for today's scope"
function Employee(name, age, role) {
  Person.call(this, name, age);
  this.role = role;
} 


*/


//Your turn, create a few objects, mess around. What do you find. 
