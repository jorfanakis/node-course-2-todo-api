const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connect to MongoDB server');

/*
  db.collection('Todos').find({
    _id: new ObjectID("59a6f1ab2a0d15ce65d15c7b")
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos');
  });
*/

  db.collection('Users').find({name: 'Josh'}).count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos');
  });
  //db.close();
});  
