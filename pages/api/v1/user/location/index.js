import { createLoc } from "../../../../../controllers/locationController.js";

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

handler.use(isAuthenticatedUser).post(createLoc);

export default handler;