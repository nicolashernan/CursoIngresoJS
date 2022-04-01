/* Pereyra hernan nicolas Ej:7 while

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;
	let suma;
	let promedio;
	
	contador=0;
	acumulador=0;
	respuesta=true;

	while(respuesta == true)
	{

		numeroIngresado = prompt("Ingrese un numero");
	    numeroIngresado = parseInt(numeroIngresado);
		contador++;
		acumulador = acumulador + numeroIngresado;
		respuesta = confirm("ingresar otro numero?");
	}

	suma = acumulador;
	promedio = suma/contador;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN