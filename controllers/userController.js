const User = require("../models/userModel");
const Cart = require("../models/cartModel");
const ErrorHandler = require("../utils/errorHandler.js");
const catchAsyncError = require("../utils/catchAsyncError.js");
const sendToken = require("../utils/jwtToken.js");
const ApiOptions = require("../utils/apiOptions");
const EmailHandler = require("../utils/emailHandler.js");
const crypto = require("crypto");
import { setCookie } from "cookies-next";

//CREATE A USER BY EMAIL
export const createUserByEmail = catchAsyncError(async (req, res, next) => {
	const newCart = await Cart.create({});
	const cartId = newCart._id;

	const { email, password, username } = req.body;
	const newUser = await User.create({
		email,
		password,
		username,
		cart: cartId,
	});

	sendToken(newUser, req, res, 201);
});

//LOGIN BY EMAIL ADDRESS
export const loginByEmail = catchAsyncError(async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		next(new ErrorHandler("Please Enter Email and Password", 401));
	}

	const user = await User.findOne({ email }).select("+password");
	if (!user) {
		next(new ErrorHandler("Invalid Email or Password ", 401));
	}

	const passwordMatch = await user.comparePassword(password);
	if (!passwordMatch) {
		next(new ErrorHandler("Invalid Email or Password", 401));
	}

	sendToken(user, req, res, 201);
});

export const logout = catchAsyncError((req, res, next) => {
	const options = {
		req,
		res,
		expires: new Date(),
		httpOnly: true,
	};
	setCookie("token", null, options);

	res.status(201).json({
		success: true,
		message: "Logged Out Successfully",
	});
});

// GET ACCOUNT
export const getAccount = catchAsyncError(async (req, res, next) => {
	const users = await User.findById(req.user.id);
	if (!users) {
		return next(new ErrorHandler("Invalid User", 404));
	}

	res.status(201).json({
		success: true,
		users,
	});
});

//FORGOT PASSWORD
export const forgotPassword = catchAsyncError(async (req, res, next) => {
	const { email } = req.body;
	const user = await User.findOne({ email: email });

	if (!user) {
		return next(new ErrorHandler("No User Found", 404));
	}

	const token = await user.createResetToken();
	user.save();
	try {
		await EmailHandler({
			receiver: email,
			tempLoc: "/html/forgotPasswordEmailTemplate.html",
			subject: "Forgot Password",
			link: `${process.env.NEXT_PUBLIC_BASE_URL}/reset/password/${token}`,
		});

		res.status(201).json({
			success: true,
			message: `Message Sent to ${email} `,
		});
	} catch (err) {
		console.log(err);
	}
});

//RESET PASSWORD
export const resetPassword = catchAsyncError(async (req, res, next) => {
	const token = req.body.token;

	const resetPasswordToken = await crypto
		.createHash("sha256")
		.update(token)
		.digest("hex");

	const user = await User.findOne({
		resetPasswordToken,
		resetPasswordExpire: { $gt: Date.now() },
	}).select("+password");

	if (!user) {
		return next(new ErrorHandler("Invalid Link or Link Exprired", 401));
	}

	if (req.body.password !== req.body.confirmPassword) {
		return next(
			new ErrorHandler(
				"New Password and Confirm Password Doesn't Match",
				401
			)
		);
	}

	user.password = req.body.password;
	user.resetPasswordToken = undefined;
	user.resetPasswordExpire = undefined;
	user.save();
	sendToken(user, req, res, 201);
});

//UPDATE ACCOUNT
export const updateAccount = catchAsyncError(async (req, res, next) => {
	const id = req.user.id;
	const { username, email, phone } = req.body;

	const user = await User.findByIdAndUpdate(
		id,
		{ username, email, phone },
		{
			runValidator: true,
		}
	);

	res.status(201).json({
		success: true,
		message: "Updated Successfully",
		user,
	});
});

//UPDATE PASSWORD
export const updatePassword = catchAsyncError(async (req, res, next) => {
	const id = req.user.id;
	const { oldPassword, password, confirmPassword } = req.body;

	const user = await User.findById(id).select("+password");

	if (!user) {
		return next(new ErrorHandler("User Not Found", 404));
	}

	const passwordMatch = await user.comparePassword(oldPassword);

	if (!passwordMatch) {
		return next(new ErrorHandler("Incorrect Old Password", 403));
	}

	if (!password) {
		return next(new ErrorHandler("Enter New Password", 401));
	} else if (password !== confirmPassword) {
		return next(new ErrorHandler("Passwords Doesn't Match", 401));
	} else if (password === oldPassword) {
		return next(new ErrorHandler("Enter A New Password. ", 401));
	}

	user.password = req.body.password;
	user.save();
	res.status(201).json({
		success: true,
		message: "Updated Successfully",
	});
});

// GET ALL USERS -- ADMIN
export const getAllUsers = catchAsyncError(async (req, res, next) => {
	const users = await User.find({});
	if (!users) {
		return next(new ErrorHandler("No Users Registered Yet", 404));
	}

	res.status(201).json({
		success: true,
		users,
	});
});

// GET SINGLE USERS -- ADMIN
export const getSingleUser = catchAsyncError(async (req, res, next) => {
	const users = await User.findById(req.query.id);
	if (!users) {
		return next(new ErrorHandler("No Users Found", 404));
	}

	res.status(201).json({
		success: true,
		users,
	});
});

// GET SINGLE USERS -- ADMIN
export const updateUserRole = catchAsyncError(async (req, res, next) => {
	const { role } = req.body;
	const user = await User.findById(req.query.id);
	if (!user) {
		return next(new ErrorHandler("No Users Found", 404));
	}
	user.role = role;
	user.save();

	res.status(201).json({
		success: true,
		user,
	});
});

// DELETE USER -- ADMIN
export const deleteSingleUser = catchAsyncError(async (req, res, next) => {
	const users = await User.findById(req.query.id);
	if (!users) {
		return next(new ErrorHandler("No Users Found", 404));
	}
	users.remove();

	res.status(201).json({
		success: true,
		message: "User Removed",
	});
});
