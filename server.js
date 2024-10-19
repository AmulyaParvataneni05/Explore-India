//create http server
//import express module
const exp = require("express");
const app = exp();
const cors = require('cors')
app.use(cors({
  origin:'http://localhost:5173',
  credentials: true
}))
require('dotenv').config();//process.env.SECRET_KEY
//import MongoClient
const { MongoClient } = require("mongodb");
//Create MongoClient object
console.log(process.env.MONGO_URI)
let mClient = new MongoClient(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
//connect to mongodb server
mClient
  .connect()
  .then((connectionObj) => {
    //connect to a database(fsd)
    const fsddb=connectionObj.db('Explore_India');
    //connect to a collection
    const usersCollection=fsddb.collection('test/users')
    //const productsCollection=fsddb.collection('products')
    // const cartCollection=fsddb.collection('cart')
    //share collection obj tp APIS
    app.set('usersCollection',usersCollection);
    //app.set('productsCollection',productsCollection);
    // app.set('productsCollection',cartCollection);
    console.log("Db connection success");
    //assign port numbr to http server of express app
    app.listen(process.env.PORT, () => console.log("http server started on port 5000"));
  })
  .catch((err) => console.log("Error in DB connection", err));

//import userApp express object
const userApp = require("./API/userApi");
//const productApp = require("./API/productsApi");

//if path starts with /user-api, forward req to userApp
app.use("/user-api", userApp);
//if path starts with /user-api, forward req to userApp
//app.use("/product-api", productApp);

//handling invalid path
app.use('*',(req,res,next)=>{
  console.log(req.path)
  //res.send({message:Invalid path})
})

//error handling middleware
app.use((err,req,res,next)=>{
  res.status(500).send({message:"error occurred",errorMessage:err.message})
})