const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is Required"],
	},
	desc: {
		type: String,
		required: [true, "Description is Required"],
	},
	stock: {
		type: Number,
		required: [true, "Stock is Required"],
	},
	images: [
		{
			public_id: {
				type: String,
				required: true,
			},
			url: {
				type: String,
				required: true,
			},
		},
	],
	categories: {
		type: [String],
		required: [true, "Categories is Required"],
	},
	tags: {
		type: [String],
	},
	sku: [
		{
			name: {
				type: String,
				required: [true, "Name is Required"],
			},
			price: {
				type: Number,
				required: [true, "Price is Required"],
				min: 100,
			},
			serving: {
				type: Number,
				required: [true, "Serving Size is Required"],
				min: 1,
				max: 20,
			},
			sku: {
				type: Number,
				required: [true, "SKU is Required"],
			},
		},
	],

	reviews: [
		{
			name: {
				type: String,
				required: [true, "Name is Required"],
			},
			comment: {
				type: String,
				required: [true, "Comment is Required"],
			},
			rating: {
				type: Number,
				required: [true, "Rating is Required"],
				min: 1,
				max: 5,
			},
		},
	],
	created_at: {
		type: Date,
		default: Date.now,
	},
});

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

module.exports = Item;
