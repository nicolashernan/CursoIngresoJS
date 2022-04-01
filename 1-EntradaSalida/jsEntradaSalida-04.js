/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombreIngresado;
	nombreIngresado = prompt("ingrese su nombre ", "natalia natalia");
	document.getElementById('txtIdNombre').value= "su nombre es " + nombreIngresado;
}

