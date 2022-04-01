function mostrar()
{
	let precio;
	let porcentaje;
	let precionConDescuento;

	precio = prompt("Ingrese el precio.");
	precio = parseInt(precio);

	porcentaje = prompt("Ingrese el porcentaje a descontar.");
	porcentaje = parseInt(porcentaje);

	precionConDescuento = (precio*porcentaje)/100 + precio;

	document.getElementById("elPrecioFinal").value = precionConDescuento;

}
