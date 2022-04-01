//pereyra hernan nicolas
function mostrar()
{
	let edadIngresada;

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		if(edadIngresada<13)
		{
			alert("Usted es menor de edad");
		}else
		{
			alert("Usted es adolescente");
		}
	}
}	
	