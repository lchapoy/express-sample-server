//Router for products
//Requirements
import {Router} from "express";
import * as controller from "./products.controller";
//create router
var router = Router();

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
router.put("/:id",controller.update)




export default router
