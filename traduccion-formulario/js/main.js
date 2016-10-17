function cambiarIdioma(idioma) {
	var elTitle = document.getElementById('form-signin-heading');
	var inputEmail = document.getElementById('inputEmail');
	var inputPassword = document.getElementById('inputPassword');
	var elCheck = document.getElementById('checkRemember');
	var elBtnSign = document.getElementById('btnSign');

	if (idioma == "es"){
		elTitle.innerHTML = "Por favor regístrate"; 
		inputEmail.setAttribute('placeholder', 'Introduce tu email');
		inputPassword.setAttribute('placeholder', 'Contraseña');
		elCheck.innerHTML = "Recordar contraseña";
		elBtnSign.innerHTML = "Regístrate"; 
	} else {
		elTitle.innerHTML = "Please sign in"; 
		inputEmail.setAttribute('placeholder', 'Please enter email');
		inputPassword.setAttribute('placeholder', 'Password');
		elCheck.innerHTML = "Remember me";
		elBtnSign.innerHTML = "Sign in"; 
	}
}

cambiarIdioma("es");

var btnEs = document.getElementById("btnEs");
btnEs.onclick = function() {	/*function() es una función anónima*/
	cambiarIdioma("es");
};
var btnEn = document.getElementById("btnEn");
btnEn.onclick = function() {	/*function() es una función anónima*/
	cambiarIdioma("en");
}