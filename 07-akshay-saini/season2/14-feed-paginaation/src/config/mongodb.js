const mongoose = require('mongoose');

// const connectionString = "mongodb+srv://praveenande2023:praveenande2023@nodejs-demo1.zy24erf.mongodb.net" // cluster
const connectionString = "mongodb+srv://praveenande2023:praveenande2023@nodejs-demo1.zy24erf.mongodb.net/devTinder" // Database

const connectDB = async () => {
  await mongoose.connect(connectionString);
}

module.exports = connectDB;





