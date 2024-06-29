const { createHash, createHmac } = require('crypto');

/* -----> Create JWT token <----- */
console.log("-----> Create JWT token <----- ")

// 01 Payload
const payload = {
    username: "praveen",
    email: 'praveen@example.com',
};

console.log("Payload:", payload);

// 02 Convert to JSON Object
const jsonPayload = JSON.stringify(payload);
console.log("JSON Payload:", jsonPayload);

// 03 Hashing the payload (secure algorithm 256 bytes)
const hash = createHash('sha256').update(jsonPayload).digest('hex');
console.log("Hashed Payload:", hash);

// 04 Base64 encode payload
const base64Payload = Buffer.from(jsonPayload).toString('base64');
console.log("Base64 Payload:", base64Payload);

// 05 HMAC Signature using secretKey
const secretKey = 'my-secrete-code';
const signature = createHmac('sha256', secretKey).update(base64Payload).digest('hex');
console.log("HMAC Signature:", signature);

// 06 JWT token (payload.signature.hash)
const jwtToken = `${base64Payload}.${signature}.${hash}`;
console.log("JWT Token:", jwtToken);



/* -----> Verification <----- */
console.log("------> Verification <------")

// Split the token to verify and decode the payload
const parts = jwtToken.split('.');
const receivedBase64Payload = parts[0];
const receivedSignature = parts[1];
const receivedHash = parts[2];

// Verify the signature
const computedSignature = createHmac('sha256', secretKey).update(receivedBase64Payload).digest('hex');
console.log("Computed Signature:", computedSignature);

if (computedSignature === receivedSignature) {
    console.log('Signature verification successful.');

    // Verify the hash for integrity check
    const computedHash = createHash('sha256').update(Buffer.from(receivedBase64Payload, 'base64')).digest('hex');
    console.log("Computed Hash:", computedHash);

    if (computedHash === receivedHash) {
        console.log('Hash verification successful.');
        console.log('Decoded Payload:', JSON.parse(Buffer.from(receivedBase64Payload, 'base64').toString('utf-8')));
    } else {
        console.log('Hash verification failed.');
    }
} else {
    console.log('Signature verification failed.');
}


console.log("====================")