//Pereyra Hernan Nicolas

function mostrar()
{
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviemre":
			mensaje = "Si tiene 30 dias.";
		break;
		case "Febrero":
			mensaje = "Si tiene 28 dias.";
		break;
		default:
			mensaje = "Si tiene 31 dias."
		break;
	}

	alert(mensaje);
	
}//FIN DE LA FUNCIÓN