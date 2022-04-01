//pereyra hernan nicolas
function mostrar()
{
	let edadIngresada;

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);

	if (edadIngresada < 13)
	{
		alert("Usted no es adolescente");
	}

	if (edadIngresada > 17)
	{
		alert("Usted no es adolescente");
	}
	 
}