import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/order.js";
import { isAuth } from "../utlis.js";

const orderRouter = express.Router()
orderRouter.get('/', isAuth, expressAsyncHandler(async (req, res) => {
  const orders = await Order.find({ userId: req.user._id })
  res.send(orders)
}))
orderRouter.get('/admin-orders', expressAsyncHandler(async (req, res) => {
  const orders = await Order.find().sort({ _id: -1 }).limit(20)
  res.send(orders)
}))



orderRouter.post('/', expressAsyncHandler(async (req, res) => {
  try {
  if (req.body.orderItems.length === 0) {
    res.status(400).send({ message: 'cart is empty!' })
  }
  else{
     console.log("done")
      const newOrder = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        totalprice: req.body.totalprice,
        shippingPrice: req.body.shippingPrice,
        paymentId: req.body.paymentId,
        userId: req.body._id,
        email: req.body.email,
        userName: req.body.userName
      })
      const order = await newOrder.save()
      res.status(201).send({ message: 'Order Placed !', order: order })
    }
  }
    catch (error) {
      console.error("Error creating order:", error.message);
      res.status(500).send({ message: 'Error placing the order. Please try again later.' });
    }
    
  
}))

orderRouter.get('/:id', isAuth, expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const order = await Order.findById(id)
  if (order) {
    res.send(order)
  }
  else {
    res.status(404).send({ message: 'Order Not Found' })
  }
}))


export default orderRouter;