const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const otpGenerator = require("otp-generator");

const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: [true, "Name is Required"],
	},
	email: {
		type: String,
		unique: true,
		required: [true, "Email is Required"],
		validate: [validator.isEmail, "Please Enter a valid Email"],
	},
	password: {
		type: String,
		required: false,
		select: false,
	},
	phone: {
		type: Number,
		required: false,
	},
	googleId: {
		type: String,
		required: false,
		select: false,
	},
	googleSecret: {
		type: String,
		required: false,
		select: false,
	},
	cart: {
		type: mongoose.Schema.ObjectId,
		ref: "Cart",
		required: true,
	},
	homeLoc: {
		type: mongoose.Schema.ObjectId,
		ref: "Location",
		required: false,
	},
	workLoc: {
		type: mongoose.Schema.ObjectId,
		ref: "Location",
		required: false,
	},
	locations: [{ type: mongoose.Schema.ObjectId, ref: "Location" }],
	role: {
		type: String,
		default: "user",
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},

	resetPasswordToken: String,
	resetPasswordExpire: Date,

	otpToken: String,
	otpExpire: Date,
});

//ENCRYPT PASSWORD
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}
	this.password = await bcrypt.hash(this.password, 12);
});

//GENERATE JWT TOKEN
userSchema.methods.getJwtToken = function () {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES,
	});
};

//COMPARE PASSWORD
userSchema.methods.comparePassword = async function (password) {
	const match = await bcrypt.compare(password, this.password);
	return match;
};

//CREATE RESET TOKEN
userSchema.methods.createResetToken = async function () {
	const token = crypto.randomBytes(20).toString("hex");

	this.resetPasswordToken = await crypto
		.createHash("sha256")
		.update(token)
		.digest("hex");

	this.resetPasswordExpire = new Date(
		new Date().getTime() + process.env.PASSWORD_EXPIRE * 60 * 60 * 1000
	);

	return token;
};

//GENERATE OTP TOKEN
userSchema.methods.createOtpToken = async function () {
	const token = otpGenerator.generate(6, {
		alphabets: false,
		upperCase: false,
		specialChars: false,
	});
	this.otpToken = token;
	this.otpExpire = new Date(
		new Date().getTime() + process.env.OTP_EXPIRE * 60 * 60 * 1000
	);
	return token;
};

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;