const express = require("express");
const app = express();
const cors = require("cors")
const mysql = require('mysql2');
var bodyParser = require('body-parser');

const profileRoute = require('./Routes/user');

app.use(cors({
    origin:'*',
    methods:['GET', 'POST','PUT','DELETE'],
}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(profileRoute);

app.listen(5000, () => console.log("Server is running"));
