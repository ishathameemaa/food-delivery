import express from 'express'
import authMiddleWare from '../middleware/auth.js'
import { placeOrder, verifyOrder,userOrders, listOrders, updateSatus } from '../controllers/orderController.js'

const orderRouter = express.Router()
orderRouter.post("/place",authMiddleWare,placeOrder)
orderRouter.post("/verify",verifyOrder)

orderRouter.post("/userOrders",authMiddleWare,userOrders)
orderRouter.get('/list',listOrders)
orderRouter.post("/status",updateSatus)

export default orderRouter
