
#### 7) Create a README file to answer the following question-


#### 1) What is the difference between var, let, and const?

Answer: var is function scoped, meaning it can be available within the function where it is called, or globally if declared outside of a function. var can be reassigned to a new value and can be redeclared.
let is blok-scoped meaning it is only available within the block of a function, within curly braces. let can be reassigned to a new value after initialization of a function but cannot be redeclared. 
const is also block-scoped, but it can not be reassigned to a new value after initialization of function. const cannot be redeclared and must be declared with a value at the time of initialization.

#### 2) What is the difference between map(), forEach(), and filter()? 

Answer: map(), is used when a function executes on each element of an array and creates a new array. It returns a new array with transformed data. 
forEach(), is used when a function executes on each element of an array but returns nothing. It is usually used for DOM manipulation or logging.
filter() is used when a function executes on each element of an array and creates a new array that passed a certain condition. It returns an array which elements fulfil a test. 

#### 3) What are arrow functions in ES6?

Answer: Arrow functions are concise way to write a function introduced in ES6 (ECMAScript, 2015). They provide a shorter syntax comparable to traditional functions and have some differences in behavior.

#### 4) How does destructuring assignment work in ES6?

Answer: Destructuring assignment in ES6 allows extracting values of arrays or objects into variables in a concise way. For example, array [a,b] = [1, 2], object {name, age}={ name: x, age: 25}.

#### 5) Explain template literals in ES6. How are they different from string concatenation?

Answer: Template literals in ES6 are strings enclosed in backticks(``). Introduced in 2015, they make string handling easier and more cleaner. 
While string concatenation used + to join stings and variables, template literals simply use backticks(``) and ${}.

