
/*
	Name: Nathan Hyatt
	Date Created: 09/21/2018
	Most Recent Revision: 09/22/2018
*/

function formValidation() {
	// initialize boolean values
	var validForm = false;
	var validName = false;
	var validEmail = false;
	var validPhone = false;
	// test the forms required fields
	// these forms are already 'required' so we don't need to test for empty inputs
	if (!validName) {
		var name = document.forms["contact-us"]["name"].value;
		var namePattern = /[^a-z ]/i; // Regular expression for /[not(^) a letter(a-z) or space ( )]/case-insensitive(i)
		var match = name.match(namePattern); // returns null if there are no characters matching namePattern
		
		if (match != null) {
			// contains a character that is not a letter
			alert("invalid character in name field");
		}
		else {
			// name field is valid
			validName = true;
		}
	}
	if (!validEmail) {
		var email = document.forms["contact-us"]["email"].value;
		// email type already handles the '@' symbol
		// need a pattern that has at least 1 '.'
		var ep = /[.]+/; // contains at least one '.'
		var epMatch = email.match(ep);
		if (epMatch != null) {
			validEmail = true;
		}
		else {
			alert("invalid email address");
		}
	}
	if (!validPhone) {
		var phone = document.forms["contact-us"]["phone"].value;
		// we need an input that is between 10 and 11 characters, excluding -'s
		// remove the -'s, spaces and ()'s from the number
		var phoneArray = phone.split('');
		for (var i=0; i<phoneArray.length; i++) {
			if ( isNaN(phoneArray[i]) ) {
				phoneArray.splice(i,1);
			}
		}
		// check length of phone number
		if (phoneArray.length < 10 || phoneArray.length > 11) {
			alert("invalid phone number: please use 10 or 11 digit phone number");
		}
		else {
			validPhone = true;
		}
	}
	validForm = validName && validEmail && validPhone;
	if (validForm) {
		alert("The provided information is valid. Thank you for your submission!");
	} 
	// don't need an else statement here because all invalid entries were already considered
	// save the other values in variables as though the form were to be submitted
	// reason for inquiry
	var reason = document.forms["contact-us"]["reason"].value;
	// additional information
	var info = document.forms["contact-us"]["info"].value;
	// have they visited the restaurant?
	var visit = "unchecked";
	var visited = document.getElementsByName("visit");
	for (var i=0; i<visited.length; i++) {
		if (visited[i].checked) {
			visit = visited[i].value;
		}
	}
	// best days to contact
	var days = document.getElementsByName("day");
	var best = ["m", "t", "w", "th", "f"];
	var removed = 0;
	for (var i=0; i<days.length; i++) {
		if (!days[i].checked) {
			best.splice(i - removed,1); // removes the unchecked items from array
			removed++; // variable to account for shift between arrays once items are removed
		}
	}
	return false;
}