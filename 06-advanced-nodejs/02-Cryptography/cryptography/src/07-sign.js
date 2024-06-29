const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./05-keypair');

/*
Signing : 
* Signing, in the context of cryptography, refers to the process of attaching a digital signature to a message or document.
* Working : 
   - Private Key: The signer uses their private key to create a unique digital signature for the message or document.
   - Public Key: Anyone with access to the signer's public key can verify the signature.
*/

const message = 'this data must be signed';

/// SIGN

const signer = createSign('rsa-sha256');

signer.update(message);

const signature = signer.sign(privateKey, 'hex');


/// VERIFY

const verifier = createVerify('rsa-sha256');

verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, 'hex');

console.log(`Verified: ${isVerified}`)
