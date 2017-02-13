//Router for products
//Requirements
var express = require("express");
var controller = require("./products.controller")
//create router
var router = express.Router();

//req (request object)
/*
  query  ?name='apple'&price=5
  body   POST or PUT or PATCH
  params before /: and after ?
*/
//GetAll
router.get("/",controller.getAll)
//GetOne
router.get("/:name",controller.getOne)

//Create One
router.post("/",controller.create)




module.exports = router
