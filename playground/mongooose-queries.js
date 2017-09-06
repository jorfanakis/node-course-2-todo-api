const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*
// ID - 59af5af87a003e77550606ae
var id = '59af5af87a003e77550606a';
if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({ _id: id}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({ _id: id}).then((todo) => {
  console.log('Todo', todo);
});
Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by Id', todo);
}).catch((e) => console.log(e));
*/

// Challenge
// ID - 59aa203bc8a05e701819e2d8
var id = '59aa203bc8a05e701819e2d8';
User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }

  console.log('User by ID', user);
}, (e) => { console.log(e)
});
