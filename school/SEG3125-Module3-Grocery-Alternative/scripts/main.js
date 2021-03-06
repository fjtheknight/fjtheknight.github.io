var activeCategory = "all";

// function to execute on site load
function initSite(){
	populateListProductChoicesFromCheckBoxes('displayProduct');
	filterSelection("all");
	openInfo('Shop');
}

// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	document.getElementById(tabName+"-nav").className += " active";

	if(tabName == "Shop"){
		populateListProductChoicesFromCheckBoxes('displayProduct');
		filterSelection("all");
	}
}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(diets, slct2) {
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
    s2.class = "row";
		//console.log(s1);
	// obtain a reduced list of products based on restrictions
	console.log("diets");
	console.log(diets);
    var optionArray = restrictListProducts(products, diets);


    // sort array based on price
    // form https://stackoverflow.com/a/35092754

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		//s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label');
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName+ ' (' + products.find(product => product.name == productName).price + ')'));
		//s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		//s2.appendChild(document.createElement("br"));    


		var productCard = document.createElement("div");
		productCard.className += "column "+products.find(product => product.name == productName).category;

		var contentDiv = document.createElement("div");
		contentDiv.className += "product-card-content";

		var productImg = document.createElement("img");
		productImg.src = products.find(product => product.name == productName).imgURL;
		//productImg.style = "width:100%";
		productImg.alt = "productImg";

		var button = document.createElement("button");
		button.innerHTML = 'add to cart';
		button.value = productName;
		button.style.backgroundColor = "#90ee90";
		button.onclick = function(){
			if(cartProducts.includes(this.value)){
				const index = cartProducts.indexOf(this.value);
				if (index > -1) {
				  cartProducts.splice(index, 1);
				}
				alert('The product: '+this.value+' has been removed from your cart');
				this.innerHTML = 'add to cart';
				this.style.backgroundColor = "#90ee90";
			} else {
				cartProducts.push(this.value);
				alert('The product: '+this.value+' has been added to your cart');
				this.innerHTML = 'remove from cart';
				this.style.backgroundColor = "#ffccbb";
			}
			console.log(cartProducts);
			selectedItems();

		};


		contentDiv.appendChild(productImg);
		contentDiv.appendChild(label);
		contentDiv.appendChild(button);
		productCard.appendChild(contentDiv);
		


		s2.appendChild(productCard);
		/*
		  <div class="column meat-seafood">
		    <div class="content">
		      <img src="images/placeholder.png" alt="Mountains" style="width:100%">
		      <h4>meat-seafood</h4>
		      <p>Lorem ipsum dolor..</p>
		    </div>
		  </div>
		*/
	}
}

function populateListProductChoicesFromCheckBoxes(slct2) {
    var s2 = document.getElementById(slct2);

    var checkedBoxes = getCheckedBoxes("dietCheckBox");
    console.log(checkedBoxes);

    let diets = [];
    if(checkedBoxes != null)
    for(i=0; i<checkedBoxes.length; i++){
    	diets.push(checkedBoxes[i].value);
    }


    populateListProductChoices(diets, slct2)
    filterSelection(activeCategory);

}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	//var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < cartProducts.length; i++) { 

			para.appendChild(document.createTextNode(cartProducts[i]));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(cartProducts[i]);
		
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}



// from https://stackoverflow.com/a/8563293
function getCheckedBoxes(chkboxName) {
  var checkboxes = document.getElementsByName(chkboxName);
  var checkboxesChecked = [];
  // loop over them all
  for (var i=0; i<checkboxes.length; i++) {
     // And stick the checked ones onto an array...
     if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i]);
     }
  }
  // Return the array if it is non-empty, or null
  return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}

















////lab3
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// script for the grid
function filterSelection(c) {
	// Get all elements with class="tablinks" and remove the class "active"
	btns = document.getElementsByClassName("btn");
	for (i = 0; i < btns.length; i++) {
		btns[i].className = btns[i].className.replace(" active", "");
	}

	document.getElementById(c+"-btn").className += " active";


	activeCategory = c;
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


function clearCart(){
	cartProducts = [];
	selectedItems();

}