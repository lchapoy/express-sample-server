var Product = require("./products.model")
function getAll(req,res,next){
  // console.log(req.query)
  Product.find({})
    .then(function(products){
      res.send(products);
    })
    .catch(function(err){
      next(err)
    })
  // res.json([{name:'apple',price:5},{name:'orange',price:3}])
}

function getOne(req,res,next){
  // console.log('params  ',req.params)
  // console.log('query ',req.query)
  let name = req.params.name
  Product.findOne({name})
    .then(function(product){
      res.send(product);
    })
    .catch(function(err){
      next(err)
    })
  // res.json([{name:'apple',price:5},{name:'orange',price:3}])
}

function create(req,res,next){
  // console.log('body ',req.body);
  Product.create(req.body)
    .then(function(product){
      res.send(product);
    })
    .catch(function(err){
      next(err)
    })
  // res.json([{name:'apple',price:5},{name:'orange',price:3}])
}

module.exports = {
  create,
  getAll,
  getOne
}
