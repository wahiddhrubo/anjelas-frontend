const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
	items: [
		{
			item: {
				type: mongoose.Schema.ObjectId,
				ref: "Item",
				required: [true, "Item Id is Required"],
			},
			pricePerUnit: {
				type: Number,
				required: [true, "Price Per Unit is Required"],
			},
			quantity: {
				type: Number,
				required: [true, "Quantity is Required"],
				max: 100,
			},
		},
	],

	updated_at: {
		type: Date,
		default: Date.now,
	},
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

module.exports = Cart;
