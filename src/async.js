'use strict';
console.log("ASYNC!");

var myData
/*
$.ajax('http://localhost:3000/todos.json', {
  success: function(data){
    myData = {todos: data};
  },
  failure: function(err) {
    console.log("OOPS");
    console.log(err);
  }
});
console.log("Here is my data!");
console.log(myData);

*/

//with promies
var updateData = function(data) {
  myData = {todos: data};
  console.log("I am DONE!");
}
var handleError = function(err) {
  console.log("oops");
}

$.ajax('http://localhost:3000/todos.json')
  .done(updateData)
  .fail(handleError);


console.log("waiting...");




var todo;
var updateTodo = function(data) {
  todo = data;
}

/*
$.ajax('http://localhost:3000/todos/1.json')
  .done(updateTodo)
  .fail(handleError);
*/

var Todo =function() {
  var _this = this;
  this.load=function(id) {
    $.ajax('http://localhost:3000/todos/1.json', {method: 'GET'})
      .done(this.populateData)
      .fail(handleError);
  },
  this.populateData= function(data) {
    this.id = data.id
    this.item = data.item
    this.completed = data.completed
  }.bind(this)
  this.create= function(item, completed) {
    //does something
  }
}

var todo = new Todo();
todo.load(1);
