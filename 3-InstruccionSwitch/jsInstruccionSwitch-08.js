//pereyra hernan Ej N°8 switch


function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Mar del plata":
		case "Cataratas":
			mensaje = "hace calor."
		break;
		default:
			mensaje = "Hace frio."
		break;
	}
	
	alert(mensaje);	

}//FIN DE LA FUNCIÓN