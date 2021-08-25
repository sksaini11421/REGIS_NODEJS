const express = require("express");
const app = express();
require('dotenv').config();
const userRouter = require('./api/users/user.router')

app.use(express.json());

app.use('/api/users',userRouter);
app.listen(process.env.APP_PORT, ()=> {
    console.log('server running',process.env.APP_PORT);
})