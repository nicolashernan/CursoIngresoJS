/* pereyra hernan Ej: While N°5
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");
	sexoIngresado = sexoIngresado.toLowerCase();


	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		confirm("Error Reingrese el sexo.");
		sexoIngresado = prompt("ingrese f ó m .");
	}

    document.getElementById("txtIdSexo").value = sexoIngresado;

}//FIN DE LA FUNCIÓN