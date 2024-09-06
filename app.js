const express = require('express')
const cors = require('cors')
const {db} = require('./db/db');
const {readdirSync} = require('fs')
const path = require('path');

const app= express()

require('dotenv').config()

const PORT= process.env.PORT;


//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => {
    const routePath = path.join(__dirname, 'routes', route);
    app.use('/api/v1', require(routePath));
});

const server=()=>{
    db();
    app.listen(PORT,()=>{
        console.log('listening to port:', PORT);
    })
}

server()