const express = require('express');
const path = require('path');
const bodyP = require('body-parser');

var app = express();

app.use(bodyP.json());
app.use(bodyP.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

const port = 9000 || process.env.NODE_PORT;

app.listen(NODE_PORT, function(req, res){
    console.log((new Date).getUTCDate, 'app started on port: ', NODE_PORT);
})
