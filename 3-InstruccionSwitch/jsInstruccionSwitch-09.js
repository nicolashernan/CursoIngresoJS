//pereyra hernan Ej N°9 Switch

function mostrar()
{
	let estacion;
	let destino;
	let porcentaje;
	let precioEstadia;
	let preciofinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	precioEstadia = 15000;

	porcentaje = 0;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 20;
				break;
				case "Mar del plata":
					porcentaje = -20;
				break;
				default:
					porcentaje = -10;
				break;
			}
		break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = -20;
				break;
				case "Mal del plata":
					porcentaje = 20;
				break;
				default:
					porcentaje = 10;
				break;		
			}
		break;
		default:
			switch(destino)
			{
				case "Cordoba":
					porcentaje = 0;
				break;
				default:
					porcentaje = 10;
				break;
			}
		break;			

	}

	preciofinal = ((porcentaje*precioEstadia)/100)+precioEstadia;

	alert(preciofinal);

}//FIN DE LA FUNCIÓN