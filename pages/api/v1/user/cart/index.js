import {
	getCart,
	addItemToCart,
} from "../../../../../controllers/cartController.js";

import { isAuthenticatedUser } from "../../../../../middleware/authUser.js";

import connectToDb from "../../../../../config/db.js";
import onError from "../../../../../middleware/error.js";

import nc from "next-connect";

connectToDb();

const onNoMatch = (req, res) => {
	res.status(404).json({
		message: "method Not Allowed",
	});
};

const handler = nc({ onError, onNoMatch });

handler
	.use(isAuthenticatedUser)
	.get("/api/v1/user/cart", getCart)
	.post("api/v1/user/cart", addItemToCart);

export default handler;
