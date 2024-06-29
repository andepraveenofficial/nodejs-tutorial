const { createHash } = require('crypto');

/*
Hash : 
* A hash function converts input data into a fixed-size string of characters.
* the same input always produces the same hash.
*/

// Create a string hash
function hash(input) {
    return createHash('sha256').update(input).digest('base64');
}

// Compare two hashed passwords

const password1 = 'my-secrete-code';
const hash1 = hash(password1);
console.log(hash1)

/// ... some time later

const password2 = 'my-secrete-code';
const hash2 = hash(password2);
console.log(hash2);

/*
hash1 : a+vkYR144PgYVKkEs6yACjYXi8WpDb8V4sokChKXL70=
hash2 : a+vkYR144PgYVKkEs6yACjYXi8WpDb8V4sokChKXL70=
*/

const match = hash1 === hash2;

console.log(match ? '✔️  good password' : '❌  password does not match');
