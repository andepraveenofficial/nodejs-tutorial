# Event Driven Architecture


### Synchronous vs Asynchronous
- Javascript is a synchronous single threaded language.
- Synchronous -> one after other
- whenever run any piece of javascript code, we need a JS Engine (v8).
- NodeJS can perform asynchronous task. But Javascript perform only Synchronous.

### Synchronous
- which can happen very quickly those are synchronous
- create variables
- execute normal functions
- JS Engine loves this type of code

### Asynchronous
- which are taking time those are asynchronous.
- API calls
- Reading a File
- Timer Functions
- This type of code blocks the JS Engine

### JS Engine
- JS Engine has just 1 callstack, Every Javascript code execute in Callstack.
- JS Engine has Memory Heap
- JS Engine Garbage Collector
- JS Engine doesn't have super powers. -> file reading, api calling, interact with database, run timer functions ...etc.

### Time
- JS Engine doesn't know time, So here we give code sometime after, then JS Engine Immediately runs that code.

### NodeJS
- NodeJS gives superpowers that is libuv.
- At the end of the day NodeJS is a C++ program
- who are developers making libraries like v8, libuv, then developers life very easy.
- v8 engine manages sync code
- libuv manages async code
- whenever sees JS ENgine async code (api calls, timer, file read ...etc), sends to libuv
- Every thing on Javascript code execute in Callstack

### libuv
- All the NodeJS superpowers handle by libuv.
- libuv works as a mediator between JS Engine and Oerating System


### NodeJS is async or sync?
- v8 is a sync
- With the power of libuv, NodeJS is a Async.
- NodeJS is a Asynchronous I/O (Non Blocking I/O), because it is not blocking the main thread.