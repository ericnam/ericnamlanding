//frameworks
const express = require('express');
const mongoose = require('mongoose');

//app start
const app = express();

//port listen
//heroku env port or localhost;5000
const PORT = process.env.PORT || '5000';
app.listen(PORT);