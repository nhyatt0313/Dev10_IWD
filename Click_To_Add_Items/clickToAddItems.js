function clearErrors() {
	//Function's purpose - reset form fields to their natural state
	//Input - none
	//Output - none
	
	for(var i=0; i < document.forms["numberFun"].elements.length; i++){
		if(document.forms["numberFun"].elements[i].parentElement
		.className.indexOf("has-") != -1){
			
			document.forms["numberFun"].elements[i].parentElement.className
			= "form-group";
		}
	}
}
function resetForm() {
	//Function's purpose - clear all fields in the <form>
	//Input - none
	//Output - none
	
	//clear the errors
	clearErrors();
	//clear value in <input> elements
	document.forms["numberFun"]["num1"].value = "";
	document.forms["numberFun"]["num2"].value = "";
	//hide the table of results
	document.getElementById("results").style.display = "none";
	document.getElementById("submitButton").innerText = "Submit";
	document.forms["numberFun"]["num1"].focus();
}
function validateItems() {
	//Function's purpose - verify the user's input is expected
	//Input - none
	//Output - none
	
	clearErrors();
	var num1 = document.forms["numberFun"]["num1"].value;
	var num2 = document.forms["numberFun"]["num2"].value;
	if(num1 == "" || isNaN(num1)){
		alert("num1 must be filled in with a number.");
		document.forms["{numberFun"]["num1"].parentElement.className 
		= "form-group has-error";
		document.forms["numberFun"]["num1"].focus();
		return false;	
	}
	if(num2 == "" || isNaN(num2)){
		alert("num2 must be filled in with a number.");
		document.forms["{numberFun"]["num2"].parentElement.className 
		= "form-group has-error";
		document.forms["numberFun"]["num2"].focus();
		return false;	
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Recalculate";
	
	document.getElementById("addResult").innerText = Number(num1) + Number(num2);
	document.getElementById("subtractResult").innerText = num1 - num2;
	document.getElementById("multiplyResult").innerText = num1 * num2;
	document.getElementById("divideResult").innerText = num1 / num2;
	return false;
}