import { setCookie } from "cookies-next";

const sendToken = (user, req, res, statusCode) => {
	const token = user.getJwtToken();

	const options = {
		req,
		res,
		maxAge: process.env.COOKIE_EXPIRE * 24 * 60 * 60,
		httpOnly: true,
	};
	setCookie("token", token, options);

	res.status(statusCode).json({
		success: true,
		token,
	});
};

module.exports = sendToken;
