function validateForm(){
	var nombre = document.getElementById('name').value;		/*El punto value es para guardar el valor del elemento "name"*/
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contraseña = document.getElementById("input-password").value;
	var tipo_bici = document.querySelector("#selecciona").value;	/*Mediante el id #selecciona obtiene el valor de lo que selecciona en tipo de bici*/

	if (nombre === "" || apellido === "" || correo === "" || contraseña === ""){	/*Si los campos están vacíos*/
		alert("Los campos son obligatorios");
		return false; 	/*Para que no avance si está vacío el campo*/	
	} else if(!/^[A-Z][a-z]*$/g.test(document.getElementById("name").value)){
		alert("Sólo la primer letra debe ser mayúscula");
		return false;
	} else if (nombre.length>30){	/*Si tiene mas de 30 caracteres el nombre, no es válido*/
		alert("El nombre introducido es muy largo");
		return false;
	} else if(correo.length>100){
		alert("e-mail inválido");
		return false;

	} else if((contraseña.length<6) || (contraseña.length>20)){
		alert("La contraseña debe tener mínimo 6 caracteres y máximo 20.");
		return false;
	} else if (contraseña === "password" || contraseña === "PASSWORD" || contraseña === "123456" || contraseña === "098765"){
		alert("Elige otra contraseña");
	} else if (tipo_bici === ""){		/*Si no selecciona ninguna opción entonces envía un mensaje*/
		alert("Elige un tipo de bici");
	}
}