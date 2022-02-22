const express = require("express")
const Routes = express.Router();
const fs = require('fs');


const dataPathUser = './model/user.json' // path to our JSON file
const dataPathProduct = './model/product.json' // path to our JSON file

// util functions User
const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPathUser, stringifyData)
}
const getUserData = () => {
    const jsonData = fs.readFileSync(dataPathUser)
    return JSON.parse(jsonData)   
}

// reading the data User
Routes.get('/user', (req, res) => {
  fs.readFile(dataPathUser, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.parse(data));
  });

});

Routes.post('/user/adduser', (req, res) => {
 
  var existUser = getUserData()
  const newUsertId = Math.floor(100000 + Math.random() * 900000)
 
  existUser[newUsertId] = req.body
   
  console.log(existUser);

  saveUserData(existUser);
  res.send({success: true, msg: 'account data added successfully'})
})


// Read - get all accounts from the json file
Routes.get('/user/list', (req, res) => {
  const users = getUserData()
  res.send(users)
})


// Update - using Put method
Routes.put('/user/:id', (req, res) => {
  var existUsers = getUserData()
  fs.readFile(dataPathUser, 'utf8', (err, data) => {
   const userId = req.params['id'];
   existUsers[userId] = req.body;

   saveUserData(existUsers);
   res.send(`accounts with id ${userId} has been updated`)
 }, true);
});

//delete - using delete method
Routes.delete('/user/delete/:id', (req, res) => {
  fs.readFile(dataPathUser, 'utf8', (err, data) => {
   var existUsers = getUserData()

   const userId = req.params['id'];

   delete existUsers[userId];  
   saveUserData(existUsers);
   res.send(`accounts with id ${userId} has been deleted`)
 }, true);
})


// util functions Product
const saveProductData = (data) => {
  const stringifyData = JSON.stringify(data)
  fs.writeFileSync(dataPathProduct, stringifyData)
}
const getProductData = () => {
  const jsonData = fs.readFileSync(dataPathProduct)
  return JSON.parse(jsonData)   
}

// reading the data Product
Routes.get('/product', (req, res) => {
  fs.readFile(dataPathProduct, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});

Routes.post('/product/addproduct', (req, res) => {
 
  var existProduct = getProductData()
  const newProducttId = Math.floor(100000 + Math.random() * 900000)
 
  existPorduct[newProducttId] = req.body
   
  console.log(existProduct);

  saveUserData(existPorduct);
  res.send({success: true, msg: 'account data added successfully'})
})


// Read - get all Product from the json file
Routes.get('/product/list', (req, res) => {
  const Products = getProductData()
  res.send(Products)
})


// Update - using Put method
Routes.put('/product/:id', (req, res) => {
  var existProducts = getProductData()
  fs.readFile(dataPathProduct, 'utf8', (err, data) => {
   const ProductId = req.params['id'];
   existUsers[ProductId] = req.body;

   saveProductData(existProducts);
   res.send(`accounts with id ${ProductId} has been updated`)
 }, true);
});

//delete - using delete method
Routes.delete('/product/delete/:id', (req, res) => {
  fs.readFile(dataPathProduct, 'utf8', (err, data) => {
   var existProduct = getProductData()

   const ProductId = req.params['id'];

   delete existProduct[ProductId];  
   saveProductData(existProduct);
   res.send(`accounts with id ${ProductId} has been deleted`)
 }, true);
})


module.exports =Routes;
  
