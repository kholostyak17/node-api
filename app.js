const express = require('express');
const res = require('express/lib/response');

const app = express();

//config express
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.send('working ok)');
})

module.exports = app;