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

$(function() {
	
	$('#entry').submit(function(e) {
	 	e.preventDefault();
		var userInput = parseFloat($('#newEntry').val());		
		userInput = userInput.toFixed(2);
		console.log(userInput);
		$('#entries').append('<tr><td></td><td>' + '$' + userInput + '</td></tr>');
		var total = (total + userInput);
		$('#total').html('$'+total);
	});

	//when user clicks enter, form submit handler so page doesn't reload and capture user input
	//convert amount to currency
	//display input as as a row in the table
	//add the user input to the total (#total)

});

