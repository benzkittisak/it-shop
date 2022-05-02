const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const database = require('./database');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// ประกาศใช้ product api
const productAPI = require('./routes/product.routes');
app.use('/api/product' , productAPI);

// Declare member api
const memberAPI = require('./routes/member.routes');
app.use('/api/member' , memberAPI);

mongoose.Promise = global.Promise;
mongoose.connect(database.db , {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> {
    console.log("connected to mongo database");
}).catch(err => console.error(err));


const server = app.listen(4000 , () => {
    console.log("connected to sever with port 4000");
});