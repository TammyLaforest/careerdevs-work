var todos = ['item 1
VM33:1 Uncaught SyntaxError: Invalid or unexpected token
var todos = ['item 1', 'item', 'item 3']
undefined

undefined
function displayTodos() {
console.log('My todos:', todos);
}
displayTodos()
VM59:2 My todos: (3) ["item 1", "item", "item 3"]
undefined
function addTodo() {
todos.push('new todo');}
undefined
todos
(3) ["item 1", "item", "item 3"]
function (){ todos.push('new todo');}
VM85:1 Uncaught SyntaxError: Unexpected token (
function displayTodos() {
console.log('My todos:', todos);
}
displayTodos()
VM87:2 My todos: (3) ["item 1", "item", "item 3"]
undefined
displayTodos() 
VM87:2 My todos: (3) ["item 1", "item", "item 3"]
undefined
function addTodo() {
todos.push('new todo');}
undefined
addTodo()
undefined
todos
(4) ["item 1", "item", "item 3", "new todo"]
displayTodos
ƒ displayTodos() {
console.log('My todos:', todos);
}
displayTodos()
VM87:2 My todos: (4) ["item 1", "item", "item 3", "new todo"]
undefined
addTodo
ƒ addTodo() {
todos.push('new todo');}
addTodo()
undefined
displayTodos()
VM87:2 My todos: (5) ["item 1", "item", "item 3", "new todo", "new todo"]
undefined
function addTodo() {
todos.push('new todo'); 
displayTodos();}
undefined
addTodo()
VM87:2 My todos: (6) ["item 1", "item", "item 3", "new todo", "new todo", "new todo"]
undefined
function addTodo(todo) {
todos.push(todo); 
displayTodos();}
undefined
addTodo('hello there')
VM87:2 My todos: (7) ["item 1", "item", "item 3", "new todo", "new todo", "new todo", "hello there"]
undefined
displayTodos()

changeTodo(0, 'changed')

displayTodos()

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

displayTodos()

changeTodo(0, 'changed again')

function deleteTodo (position) {
    todos.splice(position,1);
    displayTodos()
}

displayTodos()

deleteTodo(0
)

deleteTodo(2);
