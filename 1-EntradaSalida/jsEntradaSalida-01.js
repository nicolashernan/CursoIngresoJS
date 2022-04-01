/*
pereyra hernan
e/s 01
/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/

function mostrar()
{
	let productoIngresado1;
	let porductoIngresado2;
	let productoIngresado3;
	let precioProducto1;
	let precioProducto2;
	let precioProducto3;
	let suma;
	let promedio;
	let iva;
	let precioFinal;
	let mensaje;

	productoIngresado1 = prompt("productoIngresado1");
	precioProducto1 = prompt("precioProducto1");
	productoIngresado2 = prompt("porductoIngresado2");
	precioProducto2 = prompt("precioProducto2");
	productoIngresado3 = prompt("porductoIngresado3");
	precioProducto3 = prompt("porductoIngresado3");

	suma = precioProducto1+precioProducto2+precioProducto3;
	promedio = suma/3;
	iva = (suma*21)/100;
	precioFinal = suma+iva;
	
	mensaje = "usted ingreso "+ productoIngresado1 +" por "+ precioProducto1+"$,"+productoIngresado2+" por "+ precioProducto2+"$ y "
	+ productoIngresado3+" por "+ precioProducto3+"$";
	
	alert(mensaje);
}