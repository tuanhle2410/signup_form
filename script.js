/**
*
*@author AnhLT
*
* Script for Sign up Form
*/

/* define variables*/
var full_name = document.forms["sign_up_form"]["full_name"];
var user_name_error = document.forms["sign_up_form"]["full_name_error"];

var user_name = document.forms["sign_up_form"]["user_name"];
var user_name_error = document.forms["sign_up_form"]["user_name_error"];

var password = document.forms["sign_up_form"]["password"];
var password_error = document.forms["sign_up_form"]["password_error"];
var password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{9,}$/;

/**
*
* function for submitting on event submit
* if fullname is not filled
* or username is not filled
* or username has existed
* or password is not filled
* or password doesn't match regular expression
* then do not submit the form
*/
function validateOnSubmit() {
	if (full_name.value == "" 
		|| user_name.value == "tuanh" 
		|| user_name.value == "" 
		|| !password_regex.test(password.value) 
		|| password.value == "") {
		return false;
	}
}

/**
*
* function for validating full name, on event onkeyup
* if fullname is not filled, show warning message
*/
function validateFullname(){
	if(full_name.value == ""){
		document.getElementById("full_name_error").innerHTML = "You have to input your full name!";
	}else{
		document.getElementById("full_name_error").innerHTML = "";
	}
}

/**
*
* function for validating username, on event onkeyup
* if user is not filled or has existed, show warning message
*/
function validateUsername(){
	if (user_name.value == "tuanh") {
		document.getElementById("user_name_error").innerHTML = "This username has existed!";
	}else if(user_name.value == ""){
		document.getElementById("user_name_error").innerHTML = "You have to input your username!";
	}else{
		document.getElementById("user_name_error").innerHTML = "";
	}
}

/**
* function for validating password, on event onkeyup
* if password doesn't match regular expression, show warning message
*/
function validatePassword(){
	if (!password_regex.test(password.value)) {
	    document.getElementById("password_error").innerHTML = "Password must contain at least 9 characters including at least 1 number, 1 letter, 1 special character";
  	}else{
		document.getElementById("password_error").innerHTML = "";
	}
}