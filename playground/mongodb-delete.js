const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connect to MongoDB server');

  // deleteMany
/*
  db.collection('Todos').deleteMany({
    text: 'Eat lunch'
  }).then((result) => {
    console.log(result);
  });
*/

  // deleteOne
/*
  db.collection('Todos').deleteOne({
    text: 'Eat lunch'
  }).then((result) => {
    console.log(result);
  });
*/

  // findOneAndDelete
/*
  db.collection('Todos').findOneAndDelete({
    completed: false
  }).then((result) => {
    console.log(result);
  });
*/

  // Challenge
/*
  db.collection('Users').deleteMany({
    name: 'Josh'
  }).then((result) => {
    console.log(result);
  });
*/

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("59a6f52325b97b5e2453c9c8")
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });
});  
