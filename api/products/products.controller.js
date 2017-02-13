import Product from "./products.model";
export function getAll(req,res,next){
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

export function getOne(req,res,next){
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

export function create(req,res,next){
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
export function update(req,res,next){
  // console.log('body ',req.body);
  Product.update({_id:req.params.id},req.body)
    .then(function(product){
      res.send(product);
    })
    .catch(function(err){
      next(err)
    })
  // res.json([{name:'apple',price:5},{name:'orange',price:3}])
}
