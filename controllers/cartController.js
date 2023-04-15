const User = require("../models/userModel");
const Cart = require("../models/cartModel");
const Item = require("../models/itemsModel.js");
const ErrorHandler = require("../utils/errorHandler.js");
const catchAsyncError = require("../utils/catchAsyncError.js");
const ApiOptions = require("../utils/apiOptions");

//GET USER CART
export const getCart = catchAsyncError(async (req, res, next) => {
	const cartId = req.user.cart;
	const filteredItemsApi = new ApiOptions(req.query).getCartOptions();

	const { cartOptions } = filteredItemsApi;

	let cart = await Cart.aggregate([
		{ $match: { _id: cartId } },
		{
			$project: cartOptions,
		},
	]);
	if (!cart) {
		return next(new ErrorHandler("No Cart Found", 404));
	}
	cart = await Cart.populate(cart, {
		path: "items.item",
		select: { name: 1, _id: 0 },
	});

	res.status(201).json({
		success: true,
		cart,
	});
});

//ADD A ITEM TO A CART
export const addItemToCart = catchAsyncError(async (req, res, next) => {
	const { item, pricePerUnit, quantity } = req.body;
	const newItem = {
		item,
		pricePerUnit,
		quantity,
	};
	const cartId = req.user.cart;

	const newCart = await Cart.findById(cartId);
	let oldCart = await Cart.find({ _id: cartId, "items.item": item });

	if (!oldCart.length) {
		newCart.items.push({
			item,
			pricePerUnit,
			quantity,
		});
		newCart.save();
	} else {
		// ITEM IS ALREADY ADDED IN CART
		oldCart = await Cart.findOneAndUpdate(
			{
				_id: cartId,
				"items.item": item,
			},
			{
				$set: {
					"items.$.quantity": quantity,
				},
			}
		);
	}

	res.status(201).json({
		success: true,
		message: "Item Added",
	});
});

//REMOVE AN ITEM FROM CART
export const removeItemFromCart = catchAsyncError(async (req, res, next) => {
	const { id } = req.query;
	const cartId = req.user.cart;

	const newCart = await Cart.findByIdAndUpdate(cartId, {
		$pull: { items: { item: id } },
	});

	res.status(201).json({
		success: true,
		message: "Item Removed",
	});
});
