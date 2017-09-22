// Startup the server

const mongoose = require('mongoose');

const mongodbUri = process.env.MONGODB_URI;

// Assign which promise library mongoose should use.
mongoose.Promise = global.Promise;

mongoose.connect(mongodbUri, { useMongoClient: true });

module.exports = {
  mongoose: mongoose
};
