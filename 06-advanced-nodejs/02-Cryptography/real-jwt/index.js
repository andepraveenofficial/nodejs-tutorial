const { createHmac } = require('crypto');

/* -----> Create JWT token <----- */
console.log("-----> Create JWT token <----- ");

// 01 Payload
const payload = {
    username: "praveen",
    email: 'praveen@example.com',
};

console.log("Payload:", payload);

// 02 Convert to JSON Object
const jsonPayload = JSON.stringify(payload);
console.log("JSON Payload:", jsonPayload);

/* -----> Header <----- */
const header = {
  alg: 'HS256',
  typ: 'JWT'
};
const jsonHeader = JSON.stringify(header);

const base64UrlEncodedHeader = Buffer.from(jsonHeader).toString('base64url');

console.log('JWT Header:', base64UrlEncodedHeader);

/* -----> Payload <----- */
const base64UrlEncodedPayload = Buffer.from(jsonPayload).toString('base64url')

console.log('JWT Payload:', base64UrlEncodedPayload);

/* -----> Signature <----- */

// HMAC Signature using secretKey
const secretKey = 'my-secrete-code';
const hmac = createHmac('sha256', secretKey);
hmac.update(`${base64UrlEncodedHeader}.${base64UrlEncodedPayload}`);
const signature = hmac.digest('base64')

console.log("HMAC Signature:", signature);

/* -----> JWT token <----- */
// Format -> header.payload.signature
const jwtToken = `${base64UrlEncodedHeader}.${base64UrlEncodedPayload}.${signature}`;
console.log("JWT Token:", jwtToken);

/* -----> Verification <----- */
console.log("------> Verification <------");

// Split the token to verify and decode the payload
const parts = jwtToken.split('.');
const receivedHeader = parts[0];
const receivedPayload = parts[1];
const receivedSignature = parts[2];

// Recalculate the signature and verify
const hmacVerify = createHmac('sha256', secretKey);
hmacVerify.update(`${receivedHeader}.${receivedPayload}`);
const computedSignature = hmacVerify.digest('base64')

console.log("Computed Signature:", computedSignature);

if (computedSignature === receivedSignature) {
    console.log('Signature verification successful.');

    // Decode the payload
    const decodedPayload = Buffer.from(receivedPayload, 'base64').toString('utf-8');
    console.log('Decoded Payload:', JSON.parse(decodedPayload));
} else {
    console.log('Signature verification failed.');
}

console.log("====================");


/*
Notes : 

base64 
base64url 

*/