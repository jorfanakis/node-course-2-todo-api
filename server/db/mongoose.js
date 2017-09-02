// Startup the server

const mongoose = require('mongoose');

// Assign which promise library mongoose should use.
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useMongoClient: true});

module.exports = {
  mongoose: mongoose
};