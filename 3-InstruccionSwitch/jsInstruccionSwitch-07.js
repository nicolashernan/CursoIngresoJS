//pereyra hernan Ej N°7 switch

function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Cataratas":
			mensaje = "Norte.";
		break;
		case "Mar del plata":
			mensaje = "Este."
		break;
		default:
			mensaje = "Sur."
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN