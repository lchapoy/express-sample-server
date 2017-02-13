//Requirements
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import product from './api/products';
import morgan from 'morgan';
//Instance of app
let app = express();
//Connect to MongoDB
mongoose.connect("localhost","test-store")
let db = mongoose.connection;
db.on("error",function(e){
  console.log(e);
})
db.on("open",function(){
  console.log("Database connected");
})
//Middleware
app.use(express.static('client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(function(req,res,next){

  next();
});
//Router
app.use('/products',product);

//Catch Error
app.use(function(err,req,res,next){
  console.log(err);
  res.send({err:'problem'})
});
//Creating server
app.listen(3000,function(){
  console.log("Running on http://localhost:3000")
});
