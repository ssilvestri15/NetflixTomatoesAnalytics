const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'netflixtomatoes';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

async function connect() {
  await client.connect();
  db = client.db(dbName);
}

function getItems() {
  return db.collection('movies').find().toArray();
}

function addItem(item) {
  return db.collection('movies').insertOne(item);
}

function removeItem(itemId) {
  return db.collection('movies').deleteOne({ _id: itemId });
}

module.exports = {
  connect,
  getItems,
  addItem,
  removeItem,
};
