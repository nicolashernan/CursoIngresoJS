/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
	let centigrados;
	let farenheit;
	let mensaje;

	temperatura=document.getElementById('txtIdTemperatura').value;
	temperatura=parseInt(temperatura);

	centigrados=(temperatura-32)/1.8;

	mensaje=temperatura +"° Farenheit son " +centigrados.toFixed(2) +"° Centirgados";
	alert(mensaje);
}

function CentigradosFahrenheit () 
{
	let temperatura;
	let centrigrados;
	let farenheit; 
	let mensaje;

	temperatura=document.getElementById('txtIdTemperatura').value;
	temperatura=parseInt(temperatura);

	farenheit=(temperatura*1.8)+32;
	
	mensaje=temperatura +"° Celcius son " +farenheit.toFixed(2) +"° Farenheit";

	alert(mensaje);
}