/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
	let precio2;
	let precio3;
	let suma;

	precio1=document.getElementById('txtIdPrecioUno').value;
	precio1=parseInt(precio1);
	precio2=document.getElementById('txtIdPrecioDos').value;
	precio2=parseInt(precio2);
	precio3=document.getElementById('txtIdPrecioTres').value;
	precio3=parseInt(precio3);
	//parceint=numero entero
	//parsefloat=numero con coma
    suma = precio1 + precio2 + precio3;

    alert("la suma es " + suma);
	
}
function Promedio () 
{
	let precio1;
	let precio2;
	let precio3;
	let promedio;

	precio1=document.getElementById('txtIdPrecioUno').value;
	precio1=parseInt(precio1);
	precio2=document.getElementById('txtIdPrecioDos').value;
	precio2=parseInt(precio2);
	precio3=document.getElementById('txtIdPrecioTres').value;
	precio3=parseInt(precio3);
    
	promedio=(precio1+precio2+precio3)/3;

	alert("el resultado es " + promedio);


}
function PrecioFinal () 
{
	let precio1;
	let precio2;
	let precio3;
	let suma;
	let precioconiva;
	let preciofinal;

	precio1=document.getElementById('txtIdPrecioUno').value;
	precio1=parseInt(precio1);
	precio2=document.getElementById('txtIdPrecioDos').value;
	precio2=parseInt(precio2);
	precio3=document.getElementById('txtIdPrecioTres').value;
	precio3=parseInt(precio3);
    
    suma = precio1 + precio2 + precio3;

	precioconiva=(suma*21)/100;

	preciofinal=suma+precioconiva;

	alert("el precio final es " + preciofinal);

}