import { getAllItems } from "../../../../controllers/shopController.js";

import nc from "next-connect";

const handler = nc();

handler.get(getAllItems);

export default handler;
