var experts = [
	{
		name : "heloo",
		availability : {
			monday: false,
			tuesday: true,
			wednsday: true,
			thursday: true,
			friday: false,
			saturday: false,
			sunday: false,
		}
	},
	{
		name : "there",
		availability : {
			monday: true,
			tuesday: true,
			wednsday: true,
			thursday: false,
			friday: false,
			saturday: false,
			sunday: false,
		}
	},
	{
		name : "wsgoin",
		availability : {
			monday: false,
			tuesday: true,
			wednsday: true,
			thursday: true,
			friday: true,
			saturday: false,
			sunday: false,
		}
	},


];


//https://stackoverflow.com/questions/3446069/populate-dropdown-select-with-array-using-jquery
function appendListOfExpertsToForm(){
	var option = '<option disabled selected value> -- Selectionner un expert -- </option>';
	for (var i=0;i<experts.length;i++){
	   option += '<option value="'+ experts[i].name + '">' + experts[i].name + '</option>';
	}
	$('#veloderoute-select-expert').append(option);
}