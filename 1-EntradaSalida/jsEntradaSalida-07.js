/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroIngresado1;
	let numeroIngresado2;
	let numeroSumado;

	numeroIngresado1=document.getElementById('txtIdNumeroUno').value;
	numeroIngresado1=parseInt(numeroIngresado1);

	numeroIngresado2=document.getElementById('txtIdNumeroDos').value;
	numeroIngresado2=parseInt(numeroIngresado2);

	numeroSumado=numeroIngresado1+numeroIngresado2;

	alert("la suma es " + numeroSumado);	
}

function restar()
{
	let numeroIngresado1;
	let numeroIngresado2;
	let numeroRestado;

	numeroIngresado1=document.getElementById('txtIdNumeroUno').value;
	numeroIngresado1=parseInt(numeroIngresado1);

	numeroIngresado2=document.getElementById('txtIdNumeroDos').value;
	numeroIngresado2=parseInt(numeroIngresado2);

	numeroRestado =numeroIngresado1-numeroIngresado2;

	alert("la resta es " + numeroRestado);
	
}

function multiplicar()
{ 
	let numeroIngresado1;
    let numeroIngresado2;
    let numeroMultiplicado;

    numeroIngresado1=document.getElementById('txtIdNumeroUno').value;
	numeroIngresado1=parseInt(numeroIngresado1);

	numeroIngresado2=document.getElementById('txtIdNumeroDos').value;
	numeroIngresado2=parseInt(numeroIngresado2);

	numeroMultiplicado=numeroIngresado1*numeroIngresado2;

	alert("la multiplicacion es " + numeroMultiplicado);

	
}

function dividir()
{
	let numeroIngresado1;
    let numeroIngresado2;
    let numerDividido;

    numeroIngresado1=document.getElementById('txtIdNumeroUno').value;
	numeroIngresado1=parseInt(numeroIngresado1);

	numeroIngresado2=document.getElementById('txtIdNumeroDos').value;
	numeroIngresado2=parseInt(numeroIngresado2);

	numeroDividido=numeroIngresado1/numeroIngresado2;

	alert("la divicion es " + numeroDividido);
	
}

