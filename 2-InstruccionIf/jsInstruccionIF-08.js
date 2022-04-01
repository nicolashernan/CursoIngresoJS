//pereyra hernan nicolas
function mostrar()
{
	let edadIngresada;
	let estadoCivil;

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);

	estadoCivil=document.getElementById("estadoCivil").value;

	if(edadIngresada>17 && estadoCivil=="Soltero")
	{
	    alert("Es soltero y no es menor");
	}

}//FIN DE LA FUNCIÓN