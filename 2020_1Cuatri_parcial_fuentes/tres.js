function mostrar()
{
	let nombreIngresado;
	let apellidoIngresado;
	let generoIngresado;
	let cantidadDeHijos;
	let empleados;
	let contadoFemenino;
	let contadorMasculino;
	let contadorNoBinario;
	let porcentajeFemenino;
	let porcentajeMasculino;
	let porcentajeNoBinario;

	empleados = 0;
	contadoFemenino = 0;
	contadorMasculino = 0;
	contadorNoBinario = 0;

	while(empleados < 10)
	{
		nombreIngresado = prompt("Ingrese el nombre del empleado");

		apellidoIngresado = prompt("Ingrese el apellido");

		generoIngresado = prompt("Ingrese el genero");

		while(!(generoIngresado == "Femenino" || generoIngresado == "Masculino" || generoIngresado == "No Binario"))
		{
			generoIngresado = prompt("El genero debe ser Femenino,Masculino o No binario");
		}

		if (generoIngresado == "Femenino")
		{
			contadoFemenino++;
		}
		else
		{
			if(generoIngresado == "Masculino")
			{
				contadorMasculino++;
			}
			else
			{
				contadorNoBinario++;
			}
		}

		cantidadDeHijos = prompt("Ingrese la cantidad de hijos");
		cantidadDeHijos = parseInt(cantidadDeHijos);

		while(cantidadDeHijos < 0)
		{
			cantidadDeHijos = prompt("Error,No puede ser menor a 0");
			cantidadDeHijos = parseInt(cantidadDeHijos);
		}

		empleados++;
	}

	porcentajeFemenino = (contadoFemenino*100)/10;
	porcentajeMasculino = (contadorMasculino*100)/10;
	porcentajeNoBinario = (contadorNoBinario*100)/10;

	document.write("El porcentaje femenino es: "+porcentajeFemenino+"%.<br>")
	document.write("El porcentaje Masculino es: "+porcentajeMasculino+"%.<br>")
	document.write("El porcentaje No Binario es: "+porcentajeNoBinario+"%.<br>");
}
