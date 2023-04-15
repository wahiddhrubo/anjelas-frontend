import { getSingleItem } from "../../../../controllers/shopController.js";

import nc from "next-connect";

const handler = nc();

handler.get(getSingleItem);

export default handler;
