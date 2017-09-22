// Token example
/*
const {SHA256} = require('crypto-js');

const message = 'I am user number 3';
const hash = SHA256(message).toString();
console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

// Creating a token
const data = {
  id: 4
};

// Salt token with secret string
const token = {
  data: data,
  hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
};

const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// Verify token (data) was not changed.
if (resultHash === token.hash) {
  // Data was not manipulated.
  console.log('Data was not changed');
} else {
  console.log('Data was changed');

}

const jwt = require('jsonwebtoken');

const data = {
  id: 10
};

// This taks are data and salt.
// This returns out token
const token = jwt.sign(data, '123abc');
console.log(token);

const decoded = jwt.verify(token, '123abc');
console.log('decoded' + JSON.stringify(decoded));

*/
const bcrypt = require('bcryptjs');
const password = '123abc!'

// Create salt nad hash password.
/*
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});
*/

// To validate if a hash passed in matches password.
const hashedPassword = '$2a$10$zI8l1c8HCPcu348wrgmcpu.N4meSKyuTqweXOrnWA9AcXAFJvpX5C';
bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
