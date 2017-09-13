const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({})
// Remove all documents
/*
Todo.remove({}).then((result) => {
  console.log(result);
});
*/

//Todo.findOneAndRemove({})
//Todo.findByIdAndRemove()

/*
Todo.findByIdAndRemove('59b8aea6782055709ac474f7').then((todo) => {
  console.log(todo);
});

Todo.findOneAndRemove({ _id: '59b8aea6782055709ac474f7'}).then((todo) => {
  console.log(todo);
});
*/
