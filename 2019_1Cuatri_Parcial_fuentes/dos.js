
function mostrar()
{
	let nombreUno;
	let nombreDos;
	let pesoUno;
	let pesoDos;
	let sumaPeso;
	let promedioPeso;

	nombreUno = prompt("ingrese el primer nombre.");

	nombreDos = prompt("Ingrese el segundo nombre.");

	pesoUno = prompt("ingrese el peso de: "+nombreUno);
	pesoUno = parseInt(pesoUno);

	pesoDos = prompt("ingrese el peso de: "+nombreDos);
	pesoDos = parseInt(pesoDos);

	sumaPeso = pesoUno + pesoDos;

	promedioPeso = sumaPeso/2;

	alert("Ustedes se llaman "+nombreUno+" y "+nombreDos+" pesan "+pesoUno+
	" y "+pesoDos+" kilos y el promedio de peso es: "+promedioPeso);	

}
