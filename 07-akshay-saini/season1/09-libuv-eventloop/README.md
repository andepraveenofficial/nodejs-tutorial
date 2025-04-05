# NodeJS

### NodeJS Core Components
1. V8 JS Engine
2. libuv


### libuv
1. Event Loop
2. Thread Pool
3. Callback Queue


### NodeJS Working
- All the code comes to first V8 Engine
- If that code as a async code v8 engine moves to libuv
- Sync Code handling by the V8 JS Engine
- Async Code handling by the Libuv
- Once Synchronous code execution completed, then Async code callbacks code executed that assigned by eventloop.

### 1. Event Loop
- Event Loop job only keep checking Callstack and callback queue
- Callback Queue will runs after callstack empty (Global Execution Context removed from callstack)
- Browser Event loop and NodeJS Event loop both are different