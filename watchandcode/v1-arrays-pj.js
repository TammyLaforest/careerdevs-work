['item 1', 'item 2', 'item 3']
(3) ["item 1", "item 2", "item 3"]
var todos = ['item 1', 'item 2', 'item 3']
undefined
todos
(3) ["item 1", "item 2", "item 3"]
console.log('hello there')
VM236:1 hello there
undefined
console.log('hello there', 'gordon')
VM239:1 hello there gordon
undefined
console.log(todos)
VM245:1 (3) ["item 1", "item 2", "item 3"]
undefined
console.log('My todos:', todos)
VM248:1 My todos: (3) ["item 1", "item 2", "item 3"]0: "item 1"1: "item 2"2: "item 3"length: 3__proto__: Array(0)concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Object
undefined
todos.push('item 4')
4
todos
(4) ["item 1", "item 2", "item 3", "item 4"]
todos.push('item 5')
5
todos
(5) ["item 1", "item 2", "item 3", "item 4", "item 5"]
todos
(5) ["item 1", "item 2", "item 3", "item 4", "item 5"]
todos[0]
"item 1"
 todos [1]
"item 2"
todos [5]
undefined
todos[0]="item 1 updated'
VM302:1 Uncaught SyntaxError: Invalid or unexpected token
todos[0] = 'item 1 updated'
"item 1 updated"
todos
(5) ["item 1 updated", "item 2", "item 3", "item 4", "item 5"]
todos.splice(0, 1)
["item 1 updated"]
todos
(4) ["item 2", "item 3", "item 4", "item 5"]
todos.splice(3, 1)
["item 5"]
todos
(3) ["item 2", "item 3", "item 4"]
todos.splice(5. 1)
VM348:1 Uncaught SyntaxError: missing ) after argument list
  