const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connect to MongoDB server');

/*
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("59a992211dde2322bce55a3f")
  },
  {
    $set: {
      completed: true
    }
  },
  {
      returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
*/

  // Challenge
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59a6f52d50b8555e2561c4d6");
  }, {
    $set: {
      name: 'Olivia'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });;
});  
