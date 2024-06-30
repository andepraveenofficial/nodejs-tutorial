/* -----> Third Party Packages <----- */
const bcrypt = require("bcrypt");

const password = "secreteKey";
const saltRounds = 10;

const hashPasswordAndCompare = async () => {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("Hashed Password:", hashedPassword);

    // Compare the hashed password with the plain text password
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log("Do the passwords match?", isMatch); // true

    // Example of a wrong password
    const wrongPassword = "wrongPassword";
    const isWrongMatch = await bcrypt.compare(wrongPassword, hashedPassword);
    console.log("Do the passwords match?", isWrongMatch); // false
  
};

hashPasswordAndCompare();
