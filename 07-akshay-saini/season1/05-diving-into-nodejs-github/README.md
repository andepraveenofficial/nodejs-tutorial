# nodejs github repository

### Module
- Module is a Private space
- If you wrap some code inside a function it creates the private space.
- when you called a require, All the code of the module  is wrapped inside a function (IIFE), that function is a IIFE.
- IIFE -> Immediately Invoked Function Expression

```js
function x(){
  const a=10;

  function y(){
    console.log("b");
  }
}

// console.log(a); // you cannot access outside of the function
```

```js
require("./xyz.js)

// IIFE
(function(){
// All the code of the module is run inside this function
})()

```

### IIFE
- IIFE stands for Immediately Invoked Function Expression
```js
(function(){
  console.log("I am IIFE)
})()
```

### How are variables & functions private in different module?
- IIFE

```js
(function(){
  var a = 10;
  console.log(a)
})()
```

### module
- who are added module in the file.
- NodeJS added module parameter when you create a file

```js
(function(module){
  var a = 10;
  console.log(a)
})()
```
- who added require in the file
- NodeJS added require parameter when you create a file

```js
(function(module, require){
  var a = 10;
  console.log(a)
})()
```
- module and require given by node
- NodeJS passes module as a parameter to the IIFE

### Steps to nodejs code
1. resolving the module
   - localpath
   - .json file
   - folder
   - npm package
2. loading the module according to file type
3. wraps inside the IIFE
4. Evaluation
5. Caching -> we are using same module in different files, but here node require runs that code only once.

### node github
- V8 is a just folder in node deps, V8 is a just piece of code