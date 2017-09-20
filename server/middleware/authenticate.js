const {User} = require('./../models/user');

// Middleware method for general authentication of requests.
const authenticate = (req, res, next) => {
  // Fetch the token from the header.
  const token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if (!user) {
      // Kicks this down to the error case.
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    res.status(401).send();
  });
};

module.exports = { authenticate };
