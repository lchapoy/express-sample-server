//Requirements
import  mongoose from "mongoose";

var productSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  }
})

var Product = mongoose.model("Product",productSchema);

export default Product;
