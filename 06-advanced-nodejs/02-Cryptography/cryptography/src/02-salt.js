const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

/*
Salt : 
* A salt is a random string added to input data before it is hashed.
* It ensures that even if two inputs are the same, their hashes will be different.
* It generates every time new hash code
*/



const salt = randomBytes(16).toString("hex");
console.log(salt);

const password = "my-secrete-code";
const hashedPassword1 = scryptSync(password, salt, 64).toString("hex");

console.log(hashedPassword1);  // 0cff7e5fc78d243d9e5447dd1a594266a8817f028716c275c0353b2685999af252f4abd58f307c59bf4c980f1cba40c000c2a8cf0fccd0797bef179999b74631
console.log(hashedPassword1);  // 92cf882606206bdf4957d4854ee9511bd41bec91b5434634bc9369e16c320f00e602b656cbe09d14b9afdc91a7473d0b09bdfec88e906e280f460e458b7c5384


// with same salt we can generate the same hashedPassword;

const users = [];

function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = { email, password: `${salt}:${hashedPassword}` }
  
    users.push(user);

    return user
}

function login(email, password) {
    const user = users.find(v => v.email === email);
  
    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);
  
    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);
    
    if (match) {
        return 'login success!'
    } else {
        return 'login fail!'
    }
}


const email = "praveen@gmail.com";
const pass = "my-secret-code";

const userSignup = signup(email, pass);
console.log(userSignup);

const userLogin = login(email, pass);
console.log(userLogin);





