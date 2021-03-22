function validar(){
	let con= document.getElementById("pass").value;
	let conR= document.getElementById("passR").value;
	if (con.length >= 6) {
		if(con==conR){
			document.getElementById("login").style.display = "none";
			return false;
		}else{
			alert("ERROR, contraseña incorrecta");
			return false;
		}
	}else{
		alert("ERORR, contraseña minimo de 8 caracteres");
		return false;
	}
		
}