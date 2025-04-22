# Feed & Pagination

### Pagination

/feed?page=1&limit=10 => first 10 users 1-10
/feed?page=2&limit=10 => 11-20
/feed?page=3&limit=10 => 21-30

### MongoDB Pagination
- limit -> How many documents
- skip -> How many documents skip

```js
 let limit = parseInt(req.query.limit) || 10;
 /*
   Control the database usage
   Problem : Fetching lot of data at once
   Hacker has opportunity to stress the database -> Database will freeze
   */

limit = limit > 50 ? 50 : limit
```

### Note
- Always sends the response in same standard format.
- Production level response
1. json data
2. statusCode
3. message
4. status
5. timestamp