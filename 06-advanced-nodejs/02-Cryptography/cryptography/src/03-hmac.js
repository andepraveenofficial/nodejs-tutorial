const { createHmac } = require('crypto');

/*
HMAC :
* HMAC combines a hash function with a secret key to make sure data is correct and comes from the right source.
* The receiver uses the same secret key to recreate the HMAC and compare it with the received HMAC. 
*/

const message = 'hello';

const key1 = 'super-secret';
const hmac1 = createHmac('sha256', key1).update(message).digest('hex');
console.log(hmac1);  // 7c99e208210b37e2243b9d9523a199b4bde735624f320516b0b7d1e2b22fb864

const key2 = 'other-password';
const hmac2 = createHmac('sha256', key2).update(message).digest('hex');

console.log(hmac2);  // b64bdfad5057748ea5292e0af5b08f18d703865fa9f25896b46ca5d12b8fd345
