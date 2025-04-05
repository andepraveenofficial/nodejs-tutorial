# Thread pool in libuv

### is nodejs single threaded or multi threaded?
- V8 is a Single threaded 
- libuv has thread pool so we can run multi threads
- If you give sync code then nodejs is a single threaded language, if you give some async code it uses a uv_thread_pool to work then it works as multi thread


### thread
- thread is a container to run piece of code.
- uv_threadpool_size = 4 by default
- If a make 5 fs functions simultaneously, 4 fs functions runs by thread pool, 1 fs function waits upto thread free.
- In nodejs allocated 4 threads to run 

### nodejs modules
1. dns - domain name system
2. crypto
3. fs
4. cluster
5. os
6. http

### thread pool
- thread pool size by default 4
- we can change the thread pool size 
- 
 ```js 
process.env.THREADPOOL_SIZE = 10;
```

### Main Points
- Don't Block the Main Thread
- Don't use Sync methods like in file system methods.
