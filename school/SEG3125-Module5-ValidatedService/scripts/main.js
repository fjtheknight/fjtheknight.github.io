var experts = [
	{
		name : "Mark Aléatoire",
		availability : [0,2,4]
	},
	{
		name : "Alessandro Aléatoire",
		availability : [0,1,2,3]
	},
	{
		name : "Patricia Aléatoire",
		availability : [1,2,3,4]
	},

];


//https://www.w3schools.com/js/js_date_methods.asp
//https://stackoverflow.com/questions/40762549/html5-input-type-date-onchange-event
//https://stackoverflow.com/questions/3364493/how-do-i-clear-all-options-in-a-dropdown-box
function updateExpertsList(e, id){
	var dateEntered = new Date(e.target.value);
    //console.log(dateEntered.getDay());
    //console.log(id);

    // using the function:
	removeOptions($('#'+id)[0]);

    var option = '<option disabled selected value> -- Selectionner un expert -- </option>';

    var availableExperts = [];
	for (var i=0;i<experts.length;i++){
	   if(experts[i].availability.includes(dateEntered.getDay())){
	   	availableExperts.push(experts[i].name);
	   	option += '<option value="'+ experts[i].name + '">' + experts[i].name + '</option>';
	   }
	}   
	$('#'+id).append(option);
}

function removeOptions(selectElement) {
   var i, L = selectElement.options.length - 1;
   for(i = L; i >= 0; i--) {
      selectElement.remove(i);
   }
}



// datepicker :/

console.log('datepicker code');
$('#datepicker').datepicker({
    weekStart: 1,
    daysOfWeekHighlighted: "6,0",
    autoclose: true,
    todayHighlight: true,
});
$('#datepicker').datepicker("setDate", new Date());



// form submit
$(document).ready(function(){
  $("form").submit(function(){
    alert("Réservation avec succès!");
  });
});