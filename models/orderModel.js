const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.ObjectId,
		ref: "User",
		required: [true, "User is required"],
	},
	location: {
		type: mongoose.Schema.ObjectId,
		ref: "Location",
		required: [true, "User is required"],
	},
	cart: {
		type: mongoose.Schema.ObjectId,
		ref: "Cart",
		required: [true, "User is required"],
	},
	deliveryDate: {
		type: Date,
		required: [true, "Delivery Date is required"],
	},
	deliveryTime: {
		type: String,
		required: "Delivery Time is Required",
	},
	subTotal: {
		type: Number,
		required: "Sub Total is required",
	},
	tax: {
		type: Number,
		required: "Tax is required",
	},
	deliveryCharge: {
		type: Number,
		required: "Delivery Charge is required",
	},
	total: {
		type: Number,
		required: " Total is required",
	},
	paymentType: {
		type: String,
		required: "Payment Type is required",
	},
	paymentMethod: {
		type: String,
		required: "Payment Method is required",
	},
	transactionId: {
		type: String,
		required: "Transaction Id is required",
	},
	status: {
		type: String,
		default: "processing",
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.models.Order || mongoose.model("Order", orderSchema);
