//Pereyra Hernan Nicolas

function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje = "Este mes no tiene mas de 29 dias.";
		break;
		default:
			mensaje = "Este mes tiene 30 o mas dias";
		break;
			
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN