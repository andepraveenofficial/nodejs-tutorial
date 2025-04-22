/* -----> Env Configuration <----- */
require("dotenv").config();

console.log("Hello World");
console.log(process.env.PORT);
console.log(process.env.DB_CONNECTION_SECRET);
console.log(process.env.JWT_SECRET);
