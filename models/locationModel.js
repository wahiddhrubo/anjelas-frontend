const mongoose = require("mongoose");

const locSchema = mongoose.Schema({
	floorNo: {
		type: Number,
		required: [true, "Floor No is Required"],
	},
	apartmentNo: {
		type: String,
		required: [true, "Apartment No is Required"],
	},
	streetAddress: {
		type: String,
		required: [true, "Street Address is Required"],
	},
	latlong: {
		type: [Number],
		required: [true, "Description is Required"],
	},
	area: {
		type: String,
		required: [true, "Area is Required"],
	},
	phone: {
		type: Number,
		required: [true, "Phone is Required"],
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: "User",
		required: [true, "User is required"],
	},

	created_at: {
		type: Date,
		default: Date.now,
	},
});

const Location =
	mongoose.models.Location || mongoose.model("Location", locSchema);
module.exports = Location;
