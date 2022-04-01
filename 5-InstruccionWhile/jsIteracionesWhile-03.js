/* Pereyra hernan Ej:3 While
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;

	claveIngresada = prompt("ingrese la clave.");

	while(claveIngresada != "utn750")
	{
		
		alert("Reintente la clave");
		claveIngresada = prompt("ingrese la clave.");
		
	}

	alert("Clave de ayuda.");
	
}//FIN DE LA FUNCIÓN
