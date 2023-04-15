const Order = require("../models/orderModel.js");
const ErrorHandler = require("../utils/errorHandler.js");
const catchAsyncError = require("../utils/catchAsyncError.js");
const ApiOptions = require("../utils/apiOptions");

//CREATE ORDERS
export const createOrder = catchAsyncError(async (req, res, next) => {
	const {
		location,
		subTotal,
		tax,
		deliveryCharge,
		total,
		paymentType,
		paymentMethod,
		transactionId,
		deliveryDate,
		deliveryTime,
	} = req.body;
	const user = req.user._id;
	const cart = req.user.cart;
	const order = await Order.create({
		location,
		subTotal,
		tax,
		deliveryCharge,
		total,
		paymentType,
		paymentMethod,
		transactionId,
		deliveryDate,
		deliveryTime,
		user,
		cart,
	});
	res.status(201).json({
		success: true,
		order,
	});
});

//GET ALL ORDERS BY STATUS --USER
export const getAllUserOrders = catchAsyncError(async (req, res, next) => {
	const user = req.user.id;
	const { id, status } = req.query;
	console.log(id);
	let orders;
	if (id) {
		orders = await Order.find({ user, _id: id });
	} else if (status) {
		orders = await Order.find({ user, status });
	} else {
		orders = await Order.find({ user });
	}
	res.status(201).json({
		success: true,
		orders,
	});
});

//GET ALL ORDERS --ADMIN
export const getAllOrders = catchAsyncError(async (req, res, next) => {
	const { id, status } = req.query;
	let orders;
	if (id) {
		orders = await Order.findById(id);
	} else if (status) {
		orders = await Order.find({ status });
	} else {
		orders = await Order.find({});
	}
	res.status(201).json({
		success: true,
		orders,
	});
});

//UPDATE ORDER  STATUS --ADMIN
export const updateOrderStatus = catchAsyncError(async (req, res, next) => {
	const { status } = req.body;
	const { id } = req.query;
	const orders = await Order.findByIdAndUpdate(id, { status });
	res.status(201).json({
		success: true,
		orders,
	});
});
