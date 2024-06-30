# NodeJS

<details>
<summary>Index</summary>

## Index
* Introduction 
* Module

</details>

---

<details>
<summary>Introduction</summary>

## Introduction
NodeJS is a Javascript environment that executes Javascript code outside a web browser.

![NodeJS](./Assets/introduction/01-NodeJS.png)

### Advantages
* Cross Platform (Windows, Linux, MacOS...etc)
* Open Source
* Huge number of third-party packages
* Huge Community

</details>

---

<details>
<summary>Module</summary>

## Module
In Node JS, each Javascript file is treated as a separate module. 

### Export / Import
1. Default
2. Named

### Default
* The `module.exports` is a special object included in every Javascript file in the Node JS application by default.
* To import a module which is the local file, use the __require()__ function with the relative path of the module(fileName).

```js FirstModule.js
let FirstModule = () => {
    return "I am First Module"
};

// Default Export
module.exports = FirstModule;
```

```js
// Import
const FirstModule = require('./FirstModule');

console.log(FirstModule());  // I am First Module

```

### Named
You can export multiple items from a single file and import only what you need in another file.

```js Utils.js

// Functions
const FirstFunction = () => {
    return "I am First Function";
}

const SecondFunction = () => {
    return "I am Second Function";
}

// Named Export
exports.FirstFunction = FirstFunction;
exports.SecondFunction = SecondFunction;
```

```js
// Import 

const {FirstFunction, SecondFunction} = require('./Utils');


console.log(FirstFunction());  // I am First Function
console.log(SecondFunction());  // I am Second Function
```

</details>

---

<details>
<summary>ES6 Export/Import</summary>

## ES6 Export/Import
* Modern JS Module are known as ES6 Modules.
The `export` and `import` keywords are introduced for exporting and importing one or more members in a module.

1. Default 
2. Named

### Default 
Here we use file name extension as `.mjs`.

```js App.mjs
// Import
import FirstModule from "./FirstModule.mjs";

console.log(FirstModule());
```

```js FirstModule.mjs
// Export
let FirstModule = () => {
    return "I am First Module"
};

// Default Export
export default FirstModule

```

### Named 

```js Utils.mjs 

// Functions
export const FirstFunction = () => {
    return "I am First Function";
}

export const SecondFunction = () => {
    return "I am Second Function";
}

```

```js App.mjs
// Import 

import {FirstFunction, SecondFunction} from "./Utils.mjs"

console.log(FirstFunction());  // I am First Function
console.log(SecondFunction());  // I am Second Function
```


### Without mjs
* `npm init -y`
* Add type in the `package.json` file.
```json
{
  "type": "module"
}
```

```js Utils.js

// Functions
export const FirstFunction = () => {
    return "I am First Function";
}

const SecondFunction = () => {
    return "I am Second Function";
}

export default SecondFunction

```

```js App.js
// Import 

import SecondFunction, {FirstFunction} from "./Utils.js"

console.log(FirstFunction());  // I am First Function
console.log(SecondFunction());  // I am Second Function
```

</details>

---
