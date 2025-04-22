# Logical DB Query & Compound Indexes

- use `enum` validation

### Example Corner Cases
1. Praveen sends connection request to Akshay
2. Akshay sends connection request to Praveen
3. Praveen sends connection request to out of the database user
4. Praveen sends connection request to Praveen

### mongoose methods
- pre

### Note
- Never trust the request from client, attacker sends some hacking type request
- Corner cases are important
- when you writing code, you cannot miss the corner case, If you miss the corner cases that will given opportunity for attacker to attack your website, and your apis.
- Make like, Every single place your api secure. (api should so much protected)
- Think about all the corner cases when you write the api.

### Indexing
- Decrease the query expensive
- You need to set indexing to certain database
- Indexing is useful for api become faster
- MongoDB Create Indexes :  `unique:true, index:true`
- Single Index - Create Index on Single Field
- Compound Index - Create Index on multiple Fields


### API Creation
1. Validation
2. Corner Cases
3. Indexing