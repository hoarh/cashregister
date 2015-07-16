// HINT:
//
// When you press Enter to submit a new cash register entry, the form will 
// actually submit data and reload the page. You don't want to reload the page. It 
// messes up the running tab. So in order to prevent normal form submission, 
// make sure your form submit handler looks like this:
//
	// $('#entry').submit(function(e) {
	// 		e.preventDefault();
	//      .... do other stuff here ....
	// 
	// });

var total = 0

$(function() {
	
	$('#entry').submit(function(e) {
	 	e.preventDefault();
		var userInput = $('#newEntry').val();
		var userInputFloat = parseFloat(userInput);		
		total = total + userInputFloat;
		var priceText=convertNum(userInput);
		$('#entries').append('<tr><td></td><td>' + priceText + '</td></tr>');
		$('#total').html('$'+total);
		$('#newEntry').val('');
	});

	//when user clicks enter, form submit handler so page doesn't reload
	//capture user input and turn into a number 
	//convert amount to currency
	//display input as as a row in the table
	//add the user input to the total (#total)
	//clear entry input

	function convertNum(numInput) {
		var currencyString = "$" + numInput;
		return currencyString;
	}
});

