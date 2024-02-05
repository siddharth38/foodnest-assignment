import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/products.js";

const productRouter = express.Router();

productRouter.get('/',expressAsyncHandler(async(req,res)=>{
  const products = await Product.find({}) //return all products
  res.send(products)
}));


productRouter.post('/add-product',expressAsyncHandler(async(req,res)=>{
    const newProduct = new Product({
        name:req.body.name,
        description:req.body.description,
        image:req.body.image,
        category:req.body.category,
        price:req.body.price
    })
    const products = await newProduct.save();
    res.send(products)
}))



productRouter.get('/seed',
expressAsyncHandler(async (req,res)=>{
    const createProducts = await Product.insertMany(data.products)
    res.send({products:createProducts})
})
)

productRouter.get('/:id',expressAsyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.send(product)
    }else{
        res.status(404).send({message:'Product not found!'})
    }
}))


export default productRouter