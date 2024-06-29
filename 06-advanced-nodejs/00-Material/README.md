# Advanced NodeJS

<details>
<summary>Index</summary>

## Index
* JWT token
* Cryptography

</details>

---

<details>
<summary>JWT token</summary>

## JWT token
__JWT__ stands for __JSON Web Token__
* It is a way to securely transmit information between parties as a JSON object.

### JWT structure
1. Header
2. Payload
3. Signature

* jwtToken : `xxxxx.yyyyy.zzzzz`

* Example : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImV4YW1wbGVVc2VyIiwiaWQiOjF9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c` 


#### Header
```js
{
  "alg": "HS256",  // algorithm
  "typ": "JWT" // type of token
}
```

#### Payload
Users additional data
```js 
{
  "sub": "my-tutorial",
  "name": "Ande Praveen",
  "age": 27
}

```

### How JWT Works

#### Authentication
* The client sends credentials (e.g., username and password) to the server.
* The server verifies the credentials and generates a JWT.
* The JWT is sent back to the client.

#### Subsequent Requests
* The client sends the JWT in the Authorization header (usually with the Bearer scheme) on subsequent requests.
* The server verifies the JWT. If valid, the server processes the request; if not, the server rejects the request.


### Example Workflow
1. Client Login:
   * POST /login with username and password.
   * Server generates a JWT if the credentials are correct.
   * Response: JWT.
2. Client Request with JWT
   * GET /protected-resource with Authorization: Bearer <JWT>.
   * Server verifies JWT and responds with the protected resource if valid.


### JWT playground
Link : https://jwt.io/#debugger

### jwtwebtoken
* Sign the Token: Creates a JWT with a payload containing username and password, signs it with a secret key, and sets expiration, audience, and issuer claims.
* Decode the Token: Decodes the token without verifying it, simply extracting the payload.
* Verify the Token: Verifies the token's signature, ensuring it's valid and meets the specified criteria.


</details>

---
