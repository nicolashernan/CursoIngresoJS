//Pereyra hernan nicolas Ej:6 while

function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let suma;
	let promedio;

	numeroIngresado = prompt("ingrese 5 numeros");
	numeroIngresado = parseInt(numeroIngresado);

	contador = 0;
	acumulador = 0;

	while(contador<4)
	{
		contador++;
		numeroIngresado = prompt("ingrese otro numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado; 
	}

	suma = acumulador + numeroIngresado;
	promedio = suma/5;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
	
}//FIN DE LA FUNCIÓN