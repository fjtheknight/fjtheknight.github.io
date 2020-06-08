	
// Array of products in cart
 var cartProducts = [

 ];

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		category: "fruits-vegetables",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		organic: false,
		imgURL: "https://i5.walmartimages.ca/images/Large/094/505/6000200094505.jpg",
		price: 1.99
	},
	{
		name: "bread",
		category: "bakery-spices",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: true,
		organic: false,
		imgURL: "https://i5.walmartimages.ca/images/Enlarge/486/216/6000197486216.jpg",
		price: 2.35
	},
	{
		name: "salmon",
		category: "meat-seafood",
		vegetarian: false,
		glutenFree: true,
		lactoseFree: true,
		organic: false,
		imgURL: "https://i5.walmartimages.ca/images/Large/035/660/6000200035660.jpg",
		price: 18.00
	},
	{
		name: "organic banana",
		category: "fruits-vegetables",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		organic: true,
		imgURL: "https://i5.walmartimages.ca/images/Enlarge/201/6_r/6000191272016_R.jpg",
		price: 4.65
	},
	{
		name: "ricotta",
		category: "dairy-eggs",
		vegetarian: false,
		glutenFree: true,
		lactoseFree: false,
		organic: false,
		imgURL: "https://i5.walmartimages.ca/images/Large/065/588/6000200065588.jpg",
		price: 10.00
	},
	{
		name: "mozzarella",
		category: "dairy-eggs",
		vegetarian: false,
		glutenFree: true,
		lactoseFree: false,
		organic: false,
		imgURL: "https://i5.walmartimages.ca/images/Enlarge/577/878/6000199577878.jpg",
		price: 7.55
	},
	{
		name: "organic onion",
		category: "fruits-vegetables",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		organic: true,
		imgURL: "https://i5.walmartimages.ca/images/Enlarge/158/998/6000200158998.jpg",
		price: 2.89
	},
	{
		name: "garlic",
		category: "fruits-vegetables",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		organic: false,
		imgURL: "https://i5.walmartimages.ca/images/Large/273/739/6000191273739.jpg",
		price: 5.35
	},
	{
		name: "organic turmeric",
		category: "bakery-spices",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		organic: true,
		imgURL: "https://i5.walmartimages.ca/images/Enlarge/685/152/6000198685152.jpg",
		price: 22.55
	},
	{
		name: "salt",
		category: "bakery-spices",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		organic: false,
		imgURL: "https://i5.walmartimages.ca/images/Large/001/055/999999-066010001055.jpg",
		price: 1.00
	},
	{
		name: "ground beef",
		category: "meat-seafood",
		vegetarian: false,
		glutenFree: true,
		lactoseFree: true,
		organic: false,
		imgURL: "https://i5.walmartimages.ca/images/Large/034/409/6000200034409.jpg",
		price: 22.00
	},
	{
		name: "almond milk",
		category: "dairy-eggs",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		organic: false,
		imgURL: "https://i5.walmartimages.ca/images/Large/724/526/6000198724526.jpg",
		price: 11.00
	},
	{
		name: "eggs",
		category: "dairy-eggs",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		organic: false,
		imgURL: "https://i5.walmartimages.ca/images/Large/924/227/6000197924227.jpg",
		price: 3.00
	},
	{
		name: "organic eggs",
		category: "dairy-eggs",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		organic: true,
		imgURL: "https://i5.walmartimages.ca/images/Enlarge/213/706/31213706.jpg",
		price: 5.00
	},
	{
		name: "frozen spinach",
		category: "frozen",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		organic: false,
		imgURL: "https://i5.walmartimages.ca/images/Large/645/383/6000199645383.jpg",
		price: 2.00
	},
	{
		name: "frozen pizza",
		category: "frozen",
		vegetarian: false,
		glutenFree: false,
		lactoseFree: false,
		organic: false,
		imgURL: "https://i5.walmartimages.ca/images/Large/883/645/999999-71921883645.jpg",
		price: 6.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
	console.log(restrictions);

	// from https://stackoverflow.com/a/7889040
	prods.sort(function(a, b) {return a.price - b.price;});

	let products_description = [];

	// https://www.w3schools.com/jsref/jsref_filter.asp
	if (restrictions.includes("Vegetarian")){
		prods = prods.filter(function(value, index, arr){ return value.vegetarian == true;});
	}
	if (restrictions.includes("GlutenFree")){
		prods = prods.filter(function(value, index, arr){ return value.glutenFree == true;});
	}
	if (restrictions.includes("Organic")){
		prods = prods.filter(function(value, index, arr){ return value.organic == true;});
	}
	if (restrictions.includes("LactoseFree")){
		prods = prods.filter(function(value, index, arr){ return value.lactoseFree == true;});
	}
	console.log(prods);

	for (let i=0; i<prods.length; i+=1) {
		products_description.push(prods[i].name);
	}

	console.log(products_description);
	return products_description;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	console.log("chosenProducts");
	console.log(chosenProducts);
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
