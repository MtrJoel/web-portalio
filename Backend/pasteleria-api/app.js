// ! Import global express
const express = require('express');

const app = express();

// ! Local imports
const userRouter = require('./Routers/users');

// ! Routers
app.use('/api/v1/users', userRouter);
// ! add listener port

app.listen(3500, ()=>{
    console.log('Listening');
})
