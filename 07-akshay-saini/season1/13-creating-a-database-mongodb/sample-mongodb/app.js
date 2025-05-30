

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

const URI = "mongodb+srv://praveenande2023:praveenande2023@nodejs-demo1.zy24erf.mongodb.net"

// Connection URL
const url = URI;
const client = new MongoClient(url);

// Database Name
const dbName = 'firstDatabase';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('firstCollection');

  // the following code examples can be pasted here...
  // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  // console.log('Inserted documents =>', insertResult);

const readDocument = await collection.find({}).toArray();
console.log('Found document =>', readDocument);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());