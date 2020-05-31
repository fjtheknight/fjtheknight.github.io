	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	},
	{
		name: "salami",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	},
	{
		name: "ricotta",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	},
	{
		name: "mozzarella",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	},
	{
		name: "onion",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	},
	{
		name: "garlic",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	},
	{
		name: "turmeric",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	},
	{
		name: "salt",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
	console.log(prods);
	console.log(restrictions);
	let product_names = [];


		if (restrictions.includes("Vegetarian")){
			prods = prods.filter(function(value, index, arr){ return value.vegetarian == true;});
		}
		console.log(prods);
		if (restrictions.includes("GlutenFree")){
			prods = prods.filter(function(value, index, arr){ return value.glutenFree == true;});
		}
		console.log(prods);

	for (let i=0; i<prods.length; i+=1) {
		product_names.push(prods[i].name);
	}

	console.log(product_names);
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
