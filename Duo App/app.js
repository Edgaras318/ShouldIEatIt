// express application for handling requests easier

// intalled package express
const express = require('express');

const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//execute express like function
// for all kind off utility methods
const app = express();

const productRoutes = require('./api/routes/products');

mongoose.connect('mongodb+srv://edgaras318:edgaras1@smartmongo-4gcsc.azure.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB Connected"))
  .catch(err => console.error(err));
//middleware
app.use(morgan('dev'));
//simple bodys for url encoded data
app.use(bodyParser.urlencoded({extended: false}))
//extract json data and makes it easy readable
app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});
    }
    next();
});
// Server static files
app.use(express.static("client"));

//use is a method sets up a middleware
//incoming reuqest have to go through app.use (middleware)
// and whatever we pass though it 
// request ,response and some special next fuction
//app.use((req, res, next)=>);
// json response with right headers set up and so on

// first link so localhost:3000/products will target prodcutRoutes
app.use('/products', productRoutes);

app.use((req, res, next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;