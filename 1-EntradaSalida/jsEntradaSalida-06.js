/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroIngresado1;
	let numeroIngresado2;
	let numeroSumado;

	numeroIngresado1=document.getElementById('txtIdNumeroUno').value;
	numeroIngresado1=parseInt (numeroIngresado1);

	numeroIngresado2=document.getElementById('txtIdNumeroDos').value;
	numeroIngresado2=parseInt (numeroIngresado2);

	numeroSumado=numeroIngresado1+numeroIngresado2;
	
	alert("la suma es " + numeroSumado);
}

