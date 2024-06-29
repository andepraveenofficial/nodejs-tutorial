const {  publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./05-keypair');

/*
Asymmetric encryption :
* Asymmetric encryption is a way to keep information secure by using two different keys: a public key and a private key.
* Public Key: Think of this as a lock that everyone knows about and can use. It's used to encrypt (lock) data before sending it.
* Private Key:This is like the special key that only you have to unlock the lock. It's used to decrypt (unlock) data that was encrypted with your public key.
* Realworld : Imagine a mailbox (public key) where anyone can drop in a message but only the owner with their special key (private key) can open it and read the contents.

*/

const message = 'I am happy'

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
  );


console.log(encryptedData.toString('hex'))


const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

console.log(decryptedData.toString('utf-8'));

/*
Public key is used to Encrypt the data :
 -> 3ba0626187e609000b71af578155442c098dac66f7b24d49792a2a26028ae0add3bcff001869495287b2688c902c92a0281f5716bbe5944aa529a5a62f91978113738e5eafc8135c9a63afabb1b637b8ce70cbc4cf4ce60f40d1417649bef32a20bae49848cbab92344e53abc253325869e6a5e29bb52923dc0f18c531ff5383dc8f99269ec0952a02ab882b34cb7214d8779fb6fa1bd660df26b9f88c0a116a11f6c8e169eab45ae81ffe89e390eef5c37e40ad4b0fc8965e075911ee2a9e3fdacc965dd64a1eabe451227b8b5de33b026ad10b025dc0f0bfb811be57c6b39e9fb237372a172f600e3e3d9995337a50058d1c8a9d46090a5274f761f3d7f8ff

private key is used to Decrypt the data :
 -> I am happy

*/