# Routing & Request Handlers

### Note
- Sequence (order of the code) of the routes also matters.
- Order of the routes matter a lot.

### HTTP Methods
0. use -> It matches all HTTP methods path
1. GET
2. POST
3. PUT
4. PATCH
5. DELETE
6. HEAD
7. OPTIONS 

### API testing purpose we need to use postman

### Advanced Routing Patterns
- ?, +, (), *
- http://localhost:5000/ab?c -> ab or ac also work
- http://localhost:5000/ab+c ->  between a and c, we can put no of b's will work -> abbbc, abbc,abbbbc
- http://localhost:5000/ab*cd -> we can put anything between ab and cd, then it will works
- http://localhost:5000/a(bc)?d -> Here bc is optional, abcd, ad will works
- http://localhost:5000/a(bc)+d -> between a and d, we can put no of bc's will work -> abcbcbcd, ad

### Complex Routes
- Dynamic Parameters : /user/:userId
- Query Parameters : /user?userId=101