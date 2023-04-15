const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler.js");
const catchAsyncError = require("../utils/catchAsyncError.js");
const jwt = require("jsonwebtoken");
import { getCookie } from "cookies-next";

export const isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
	const token = getCookie("token", { req, res });
	console.log(token);
	if (!token) {
		return next(new ErrorHandler("Please Login First", 401));
	}
	const decodedData = jwt.verify(token, process.env.JWT_SECRET);

	req.user = await User.findById(decodedData.id);

	next();
});

export const isAuthorized = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return next(
				new ErrorHandler(`${req.user.role} Can't Access This Page`, 401)
			);
		}
		next();
	};
};
