//pereyra hernan nicolas
function mostrar()
{
	let edadIngresada;

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);

	if (edadIngresada > 12)
	{
		if (edadIngresada < 18)
		{
			alert("Usted es adolescente");
		}

	}
		
}