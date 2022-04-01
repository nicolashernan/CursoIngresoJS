/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let cantidadNegativos;
	let sumaPositivos;
	let cantidadPositivos;
	let contador;
	let cantidadCero;
	let promedioPositivos;
	let promedioNegativos;
	let cantidadPares;
	let diferencia;

	cantidadNegativos = 0;
	cantidadPositivos = 0;
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadCero = 0;
	cantidadPares = 0;

	respuesta = true;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero");
	    numeroIngresado = parseInt(numeroIngresado);
		contador++;

		if(numeroIngresado < 0)
		{

			sumaNegativos=sumaNegativos+numeroIngresado;
			cantidadNegativos++;

		}
		else
		{
			if(numeroIngresado > 0)
			{
			
			sumaPositivos=sumaPositivos+numeroIngresado;
			cantidadPositivos++;

			}
			else
			{
			
			cantidadCero++;

			}
		}
		if (numeroIngresado%2 == 0) 
		{
			cantidadPares++;
		}

			
		
		respuesta = confirm("ingresar otro numero?");

	}

	if(cantidadNegativos>0) 
	{
		promedioNegativos=sumaNegativos/cantidadNegativos;
	}
	else
	{
		promedioNegativos = 0;
	}

	if(cantidadPositivos>0)
	{
		promedioPositivos=sumaPositivos/cantidadPositivos;
	}
	else
	{
		promedioPositivos = 0; 
	}

	diferencia = sumaPositivos-sumaNegativos;

	document.write("la suma de negativos es :"+sumaNegativos+ "<br>");
	document.write("la suma de positivos es :"+sumaPositivos+ "<br>");
	document.write("la catidad de negativos es :"+cantidadNegativos+ "<br>");
	document.write("la catidad de positivos es :"+cantidadPositivos+ "<br>");
	document.write("la catidad de ceros es :"+cantidadCero+ "<br>");
	document.write("la catidad de numeros pares es :"+cantidadPares+ "<br>");
	document.write("el promedio de positivos es :"+promedioPositivos+ "<br>");
	document.write("el promedio de negativos es :"+promedioNegativos+ "<br>");
	document.write("la diferencia entre positivos y negativos es :"+diferencia+ "<br>");



}//FIN DE LA FUNCIÓN