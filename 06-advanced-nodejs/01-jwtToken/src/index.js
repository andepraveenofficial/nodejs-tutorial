/* -----> Third Party Packages <----- */
const jwt = require("jsonwebtoken");


/* -----> Encode <----- */ 
const payload = {
    username:"andepraveen",
    password:"123456789"
};

const secretKey = "my-secret-key";

const options = {
    algorithm: 'HS256', // Use a secure algorithm
    expiresIn: '1h', // Token expires in 1 hour
    issuer: 'andepraveen', // Issuer claim
    audience: 'andepraveen-app-users' // Audience claim
}


// Generate the Token
const token = jwt.sign(payload, secretKey, options);
console.log(token); 

/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuZGVwcmF2ZWVuIiwicGFzc3dvcmQiOiIxMjM0NTY3ODkiLCJpYXQiOjE3MTg3OTEyNzEsImV4cCI6MTcxODc5NDg3MSwiYXVkIjoiYW5kZXByYXZlZW4tYXBwLXVzZXJzIiwiaXNzIjoiYW5kZXByYXZlZW4ifQ.EO8O6F5ISD-GBvp3u93FsANTtisAwO_dhGl97JXZqfU
*/

console.log("-----------------")


/* -----> Decode Payload <----- */
const decodedPayload = jwt.decode(token);
console.log(decodedPayload);

console.log("---------------")

/* -----> Verification <----- */

const verifiedToken = jwt.verify(token, secretKey, {
    algorithms: ['HS256'], // Only allow secure algorithms
    issuer: 'andepraveen', // Validate the issuer
    audience: 'andepraveen-app-users' // Validate the audience
});

console.log(verifiedToken)

console.log("==============")