class ApiOptions {
	constructor(queryStr) {
		this.queryStr = queryStr;
	}

	searchAndFilterOptions(page, limit) {
		const name = this.queryStr.keyword || "";
		const cat = this.queryStr.categories || "";
		const tg = this.queryStr.tags || "";
		const maxRating = parseInt(this.queryStr.maxRating) || 5;
		const minRating = parseInt(this.queryStr.minRating) || 1;

		const skip = limit * (page - 1);

		this.matchOptions = {
			...(name && {
				name: {
					$regex: name,
					$options: "i",
				},
			}),
			...(cat && {
				categories: {
					$in: cat.split(","),
				},
			}),
			...(tg && {
				tags: {
					$in: tg.split(","),
				},
			}),
			stock: {
				$gte: parseInt(this.queryStr.minStock) || 1,
				$lte: parseInt(this.queryStr.maxStock) || 2500,
			},
			"sku.price": {
				$gte: parseInt(this.queryStr.minPrice) || 1,
				$lte: parseInt(this.queryStr.maxPrice) || 10000,
			},
			$and: [
				{
					$expr: {
						$lte: [{ $avg: "$reviews.rating" }, maxRating],
					},
				},
				{
					$expr: {
						$gte: [{ $avg: "$reviews.rating" }, minRating],
					},
				},
			],
		};

		this.groupOptions = {
			_id: "$_id",

			name: { $first: "$name" },
			stocks: { $max: "$stock" },
			category: { $first: "$categories" },
			tags: { $first: "$tags" },
			price: {
				$mergeObjects: {
					min: { $min: "$sku.price" },
					max: { $max: "$sku.price" },
				},
			},
			ratingAvg: { $avg: "$reviews.rating" },
		};

		this.facet = {
			metadata: [
				{ $count: "total" },
				{
					$addFields: {
						page: page,
						totalPages: {
							$ceil: { $divide: ["$total", limit] },
						},
					},
				},
			],
			data: [
				{ $skip: skip },
				{ $limit: limit },
				{
					$addFields: {
						ratingAvg: { $round: ["$ratingAvg", 1] },
					},
				},
			],
		};

		return this;
	}

	getCartOptions() {
		this.cartOptions = {
			items: {
				$map: {
					input: "$items",
					as: "item",
					in: {
						item: "$$item.item",
						quantity: "$$item.quantity",
						price: "$$item.pricePerUnit",
						total: {
							$multiply: [
								"$$item.pricePerUnit",
								"$$item.quantity",
							],
						},
					},
				},
			},
			total: {
				$reduce: {
					input: "$items",
					initialValue: 0,
					in: {
						$add: [
							{
								$multiply: [
									"$$this.pricePerUnit",
									"$$this.quantity",
								],
							},
							"$$value",
						],
					},
				},
			},
		};
		return this;
	}
}

module.exports = ApiOptions;
