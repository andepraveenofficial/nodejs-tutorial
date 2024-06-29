# Cryptography

## Setup
1. Node Environment Setup
    * `npm init -y`
2. Cryptography Setup
    * `npm install crypto`

## Cryptography
* Cryptography is a way of protecting information so that only certain people can read it. 
* It's like writing a message in a secret code that only your friend knows how to read.


### Key concepts
1. Confidentiality
2. Integrity
3. Authentication
4. Non-repudiation


#### confidentiality
* Confidentiality in cryptography is about keeping information secret so that only the right people can see it.
* This is often achieved through encryption, where data is transformed into a format that can only be read by someone who has the correct decryption key.
* Encryption: Convert a plain text message into a secret code (ciphertext) using a key.
* Decryption: Convert the secret code back into the original plain text using the same key.
* Real-World Scenario : Imagine you want to send a secret message to your friend over the internet. You use the above encryption method to turn your message into a secret code. You then send the secret code to your friend, who uses the decryption method with the same key to turn it back into the original message. This way, even if someone intercepts the message, they won't be able to read it without the key.

#### Integrity
* Integrity in cryptography ensures that information has not been altered or tampered with. It guarantees that the data received is exactly what was sent.
* Hashing is the process of converting data into a fixed-size string of characters, which is typically a hash code. If the data changes in any way, the hash code will change significantly, making it easy to detect tampering.
* Real-World Scenario : Imagine you send a file to your friend, and you want to ensure that it hasn't been altered during transmission. You can create a hash of the file before sending it. Your friend can then create a hash of the received file and compare it with the hash you provided. If the hashes match, the file has not been tampered with.

#### Authentication
* Example : Imagine you receive an email that says it's from your friend. How can you be sure it's really from them and not someone pretending to be them? This is where authentication comes in.
* How Authentication Works : A digital signature is like a handwritten signature or a fingerprint, but it's created using mathematical algorithms. It provides a way to verify the authenticity of a message or document.

#### Non-repudiation
* Non-repudiation ensures that a sender cannot later claim they did not send a message or perform an action, using methods like digital signatures. It provides clear proof of the origin and integrity of data, crucial for trust and accountability in digital transactions and contracts. This helps prevent disputes by establishing the sender's responsibility for their communications or transactions.

---

## Concepts
1. Hash
2. Salt
3. HMAC
4. Symmetric Encryption
5. Keypairs
6. Asymmetric Encryption
7. Signing

### Hash
* A hash function converts input data into a fixed-size string of characters.
* the same input always produces the same hash.
* Hashes are designed to be one-way functions, meaning they are not meant to be reversed or "decoded."

### Salt
* A salt is a random string added to input data before it is hashed.
* It ensures that even if two inputs are the same, their hashes will be different.
* Salts make it much harder for attackers to use precomputed tables (like rainbow tables) to crack hashes.
* Hash the combined salt and input.
* we cannot decode the salted hash.

### HMAC
* HMAC stands for Hash-based Message Authentication Code.   
* HMAC combines a hash function with a secret key to make sure data is correct and comes from the right source.
* The receiver uses the same secret key to recreate the HMAC and compare it with the received HMAC. 

###  Symmetric Encryption
* Symmetric encryption is a type of encryption where the same key is used for both encrypting and decrypting data. It is a straightforward method where parties involved in the communication share a single secret key.
* Symmetric encryption uses a single key to both encrypt (encode) and decrypt (decode) data. This key must be kept secret between the sender and receiver.
* Imagine you have a lockbox that can only be opened with a special key. You and your friend both have copies of this key. When you want to send a secret message, you put it in the lockbox and lock it with your key. Your friend uses their copy of the same key to unlock and read the message. 
* We can decode the token.

### Keypairs
* Public Key: This key is shared openly and used by others to encrypt messages or verify digital signatures. It cannot decrypt messages encrypted with it.
* Private Key: Kept secret by its owner, the private key is used for decrypting messages encrypted with the corresponding public key and for creating digital signatures. It should never be shared.

### Asymmetric Encryption
* Asymmetric encryption is a way to keep information secure by using two different keys: a public key and a private key.
* Public Key: Think of this as a lock that everyone knows about and can use. It's used to encrypt (lock) data before sending it.
* Private Key:This is like the special key that only you have to unlock the lock. It's used to decrypt (unlock) data that was encrypted with your public key.
* Realworld : Imagine a mailbox (public key) where anyone can drop in a message but only the owner with their special key (private key) can open it and read the contents.

### Signing
* Signing, in the context of cryptography, refers to the process of attaching a digital signature to a message or document.
* It ensures the authenticity, integrity, and non-repudiation of the content.
* Authentication: Signing proves that the message or document comes from the claimed sender.
* Integrity: It ensures that the message has not been altered since it was signed.
* Non-repudiation: The signer cannot deny having signed the document.
* Working : 
   - Private Key: The signer uses their private key to create a unique digital signature for the message or document.
   - Public Key: Anyone with access to the signer's public key can verify the signature.