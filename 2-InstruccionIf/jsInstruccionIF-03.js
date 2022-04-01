//pereyra hernan
function mostrar()
{
	let edadIngresada;

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);

	if (edadIngresada > 17)
	{
		alert("es mayor de edad ");
	}

	if (edadIngresada <= 17)
	{
		alert("es menor de edad ");
	}

}