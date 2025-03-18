# Lets write Code

### NodeJS Installation
- Download LTS version
- Node Version Checking on cmd : `node -v`
- By default npm comes with node, npm version checking on cmd : `npm -v`

### Write Code
- Node REPL : Read Evaluate Print Loop
- With Node REPL, we can run nodejs code on Javascript Runtime Environment.
- NodeJS is a Javascript Runtime Environment.
- We can run javascript outside of the Browser with NodeJS.
- REPL is almost like browser console
- REPL does not work production work.
- Testing purpose we can use REPL.

### Global Object
- On Browser : window is a global object.
- window object given by browser, not v8 Engine
- On NodeJS : global is global object.
- window is inside the browser, global inside the NodeJS.
- In browser -> window === this
- In NodeJS -> global !== this

### v8
- V8 engine only follows the ECMA standards.