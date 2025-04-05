# V8 Engine

- Code runs in NodeJS like non-blocking fashion.
- V8 Engine developed by google and maintained by Google.
- 
### V8 Code Execution Flow
- Code Broken down into tokens in v8 Engine
- with tokens creates AST (Abstract Syntax Tree).
- You can check AST Explorer website.

### Syntax Tree
- If the code not generates the AST tree, then It throws a Syntax Error.
- Ex : Unexpected token

### Languages
- Two Types of languages
  1. Interpreter
  2. Compiled
  3. Javascript

### 1. Interpreter
- Line by Line Code Execution
- Fast Initial Execution
- It has Interpreter

### Compiled
- First compile entire code into machine Code, The starts the Execution
- Initial takes time, Later Execution Fast
- Ex : Java
- It has compilers

### JS Engine
- Javascript is a JIT compilation. (Just in Time Compilation)
- javascript mixes the Compiler and Interpreter.
- Ignition Compiler + Turbofan Compiler
- V8 Engine is a best JS Engine in the Market.