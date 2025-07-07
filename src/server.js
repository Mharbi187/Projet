const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
const app = express();
app.user(express.json());
connectDB();
app.post('/api/')


