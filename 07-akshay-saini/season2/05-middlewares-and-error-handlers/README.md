# response and error handlers

### response
- Cannot set headers after they are sent to the client
- when client call the api, TCP connection made, once response received from server, TCP connection will close.
- Note1 : in route send `res.send()` per route
- Note2 : use return after `res.send()`, After res don't go further.

### Learn
- How to use `next()` -> give control to next callback


### Middlewares
- If you want to hit target, in between you need to pass some actions, those are called middlewares.
- GET /users => middleware chain => request handler

### Server
- The main Job of the server respond back to the client.


### Types of middlewares
1. `app.use("/", () => {})` => Handle Auth Middleware for all request GET, POST, PUT and DELETE requests 
2. `app.use("/", () => {})` => Handle Auth Middleware for only  GET request

### Error Middlewares
- If we not using any error handlers, express sends error message and some files location data to client. easily hackers know the data file locations