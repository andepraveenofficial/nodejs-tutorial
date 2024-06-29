const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

/*
Symmetric Encrption :
* Symmetric encryption uses a single key to both encrypt (encode) and decrypt (decode) data. This key must be kept secret between the sender and receiver.
*/

const message = 'I like coding';

/// Cipher
const key = randomBytes(32);
const iv = randomBytes(16);  // Initialization vector

// Advanced Encryption Standard
const cipher = createCipheriv('aes256', key, iv);

/// Encrypt
const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
console.log(`encode: ${encryptedMessage}`);  // ef1148265824bfee3f515f3c028588fc

/// Decrypt
const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8');

console.log(`decode: ${decryptedMessage.toString('utf-8')}`); // I like coding