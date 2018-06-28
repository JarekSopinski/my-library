const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const portNumber = 8080;
const databaseUrl = 'mongodb://dbAdmin:db1357@ds249079.mlab.com:49079/my-library';

mongoose.connect(databaseUrl);
mongoose.Promise = global.Promise;

app.use(express.static('dist'));

app.listen(process.env.port || portNumber, () => console.log(`Listening on port ${portNumber}`));