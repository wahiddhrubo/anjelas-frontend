import {
	createUserByEmail,
	loginByEmail,
	logout,
	getAccount,
	forgotPassword,
	resetPassword,
	updateAccount,
	updatePassword,
} from "../../../../controllers/userController.js";

import { isAuthenticatedUser } from "../../../../middleware/authUser.js";

import connectToDb from "../../../../config/db.js";
import onError from "../../../../middleware/error.js";

import nc from "next-connect";

connectToDb();

const onNoMatch = (req, res) => {
	res.status(404).json({
		message: "method Not Allowed",
	});
};

const handler = nc({ onError, onNoMatch });
handler
	.post("/api/v1/user/login", loginByEmail)
	.post("/api/v1/user/register", createUserByEmail)
	.post("/api/v1/user/indentify", forgotPassword)
	.post("/api/v1/user/recover", resetPassword)
	.get("/api/v1/user", resetPassword)
	.post("/api/v1/user/recover", resetPassword)
	.get("/api/v1/user/logout", logout);

handler.use(isAuthenticatedUser).post("/api/v1/user/password", updatePassword);

export default handler;
