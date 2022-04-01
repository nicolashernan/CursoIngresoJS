//Pereyra hernan Ej switch:5

function mostrar()
{
	let horaIngresada;
	let mensaje;

	horaIngresada = document.getElementById("txtIdHora").value;
	horaIngresada = parseInt(horaIngresada);

	switch(horaIngresada)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		 mensaje = "Es de mañana.";
		break; 
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN