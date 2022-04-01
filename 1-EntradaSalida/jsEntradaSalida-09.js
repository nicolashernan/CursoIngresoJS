/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let porcentajeIngresado;
	let resultado;
	let aumento;

    sueldo=document.getElementById('txtIdSueldo').value;
    sueldo=parseInt(sueldo);

    porcentajeIngresado=prompt(porcentajeIngresado);

    resultado=(sueldo*porcentajeIngresado)/100;

    aumento=resultado+sueldo;

    document.getElementById('txtIdResultado').value=aumento;
       
}
