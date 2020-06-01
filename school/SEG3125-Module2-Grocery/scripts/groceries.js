	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 18.00
	},
	{
		name: "organic salami",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 15.65
	},
	{
		name: "ricotta",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "mozzarella",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 7.55
	},
	{
		name: "organic onion",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.89
	},
	{
		name: "garlic",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 5.35
	},
	{
		name: "organic turmeric",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 22.55
	},
	{
		name: "salt",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
	console.log(restrictions);

	// from https://stackoverflow.com/a/7889040
	prods.sort(function(a, b) {return a.price - b.price;});

	let products_description = [];


		if (restrictions.includes("Vegetarian")){
			prods = prods.filter(function(value, index, arr){ return value.vegetarian == true;});
		}
		if (restrictions.includes("GlutenFree")){
			prods = prods.filter(function(value, index, arr){ return value.glutenFree == true;});
		}
		if (restrictions.includes("Organic")){
			prods = prods.filter(function(value, index, arr){ return value.organic == true;});
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
