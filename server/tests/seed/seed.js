const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

// Two users. First with a valid parts. Second no token 
const user1Id = new ObjectID();
const user2Id = new ObjectID();
const users = [
{
  _id: user1Id,
  email: 'jorfanakis@icloud.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: user1Id, access: 'auth'}, 'abc123').toString()
  }]
},
{
  _id: user2Id,
  email: 'co749@outlook.com',
  password: 'userTwoPass'
}
];

// Dummy todos to seed db
const todos = [
  {
     _id: new ObjectID(),
    text: 'First test todo'
  },
  {
     _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 123
  }
];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    const userOne = new User(users[0]).save();
    const userTwo = new User(users[1]).save();

    // Takes an array of promises and waits until they all resolve.
    return Promise.all([userOne, userTwo]);
  }).then(() => done());;
};

module.exports = { todos, populateTodos, users, populateUsers };
