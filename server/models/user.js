const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

// Stores the schema (properties) for a user.
const UserSchema = new mongoose.Schema({
  email: { 
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: function(v) {
        return validator.isEmail(v);
      },
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

// Instance Methods.
// This is an override which determines what is sent back when a 
// mongoose User model is turned to JSON
// For a user one should not return tokens and password. THis limits that.
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function() {
  const user = this;
  const access = 'auth';
  const token = jwt.sign({
                           _id: user._id.toHexString(),
                           access: access
                         },
                         process.env.JWT_SECRET).toString();
   // Adds to lcoal users tokens[]
   user.tokens.push({access, token});

   // Updates the db.
   // This does not return a promise. It returns the value (token)
   // This returned value will be passed as the res to the next then call.
   return user.save().then(() => { return token; })
};

UserSchema.methods.removeToken = function (token) {
  const user = this;
  return user.update({
    $pull: {
      tokens: {
        token: token
      }
    }
  });
};

// Model methods.
UserSchema.statics.findByToken = function(token) {
  const User = this;
  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    //return new Promise((resolve, reject) => {
    //  return reject;
    return Promise.reject();
  }

  return User.findOne({
      '_id': decoded._id,
      'tokens.token': token,
      'tokens.access': 'auth'
  });
};

UserSchema.statics.findByCredentials = function(email, password) {
  const User = this;
  return User.findOne({email}).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if(res === true) {
          resolve(user);
        }

        reject();
      });
    });
  });
};

UserSchema.pre('save', function(next) {
  const user = this;
  // Returns true if password is modified, else false.
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// User Model
const User = mongoose.model('User', UserSchema);

module.exports = {
  User: User
}
