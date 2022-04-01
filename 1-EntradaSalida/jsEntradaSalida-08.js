/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroIngresado1;
	let numeroIngresado2;
	let resto;

	numeroIngresado1=document.getElementById('txtIdNumeroDividendo').value;
	numeroIngresado1=parseInt(numeroIngresado1);

	numeroIngresado2=document.getElementById('txtIdNumeroDivisor').value;
	numeroIngresado2=parseInt(numeroIngresado2);

	resto=numeroIngresado1%numeroIngresado2;

	alert("el resto es " + resto);
}
