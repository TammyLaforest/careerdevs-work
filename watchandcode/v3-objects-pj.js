/*var myName = 'Gordon';
undefined
function sayName() {
console.log(myName);}
undefined
sayName();
VM201:2 Gordon
undefined
var myName = 'Gordon';
undefined
function sayName() {
var secret - 'watchandcode';
console.log(myName);}
VM215:2 Uncaught SyntaxError: Unexpected token -
function sayName() {
var secret - 'watchandcode';
console.log(secret);}
VM219:2 Uncaught SyntaxError: Unexpected token - */

//End interlude

var myComputer = {
operatingSystem: 'mac',
screenSize: '15 inches',
purchaseYear: 2011}
undefined
myComputer
{operatingSystem: "mac", screenSize: "15 inches", purchaseYear: 2011}
myComputer.operatingSystem
"mac"
myComputer.screenSize
"15 inches"
myComputer.purchaseYear
2011

var gordon = {
name = 'Gordon', 
sayName:function() { console.log(this);}

gordon.sayName();
VM312:5 Uncaught SyntaxError: Unexpected identifier
var gordon = {
name = 'Gordon', 
sayName:function() { console.log(this.name);}

gordon.sayName();
VM315:5 Uncaught SyntaxError: Unexpected identifier
gordon.sayName();
VM318:1 Uncaught ReferenceError: gordon is not defined
    at <anonymous>:1:1
(anonymous) @ VM318:1
gordon.sayName();

var todoList = {
  todos: ['item 1', 'item 2', 'item 3'], 
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },

addTodo: function(todo){
  this.todos.push(todo);
  this.displayTodos();
},
changeTodos: function(position, newValue){
  this.todos[position] -newValue;
  this.displayTodos();
} 
function deleteTodos(position) {
  this.todos.splice(position, 1);
  this.displayTodos();
}
};





