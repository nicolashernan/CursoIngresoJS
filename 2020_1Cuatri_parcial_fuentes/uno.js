 /*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
	let contador;
	let productoIngresado;
	let precioIngresado;
	let cantidadUnidades;
	let marca;
	let fabricante;
	let precioAlcoholMasBarato;
	let banderaAlcohol;

	contador = 0;
	acumuladorJabon = 0;
	acumuladorBarbijo = 0;
	acumuladorAlcohol = 0;
	cantidadUnidades = 0;

	while(contador<5)
	{
		productoIngresado = prompt("Ingrese el producto");

		while(productoIngresado!="barbijo"&&productoIngresado!="jabon"&&productoIngresado!="alcohol")
		{

			productoIngresado = prompt("Ingrese barbijo,jabon o alcohol");

		}

		precioIngresado = prompt("Ingrese el precio del producto");
		precioIngresado = parseInt(precioIngresado);

		while(precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado = prompt("ingrese un precio entre $100 y $300")
			precioIngresado = parseInt(precioIngresado);

		}

		    cantidadUnidades = prompt("ingrese la cantidad de unidades");
		    cantidadUnidades = parseInt(cantidadUnidades);

		while((cantidadUnidades<1)||(cantidadUnidades>1000))
		{
			cantidadUnidades = prompt("Ingrese una cantidad entre 1 y 1000 unidades")
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marca = prompt("Ingrese la marca del producto.");
		fabricante = prompt("Ingrese el fabricante.");
		contador++;

	}
	 if (tipodeproducto == "Alcohol") {}

		if(banderaAlcohol == "no paso")
		{
			banderaAlcohol = "ya paso";
			precioAlcoholMasBarato = precioIngresado;
			fabricantealcoholmasbarato = fabricante;
			cantidadAlcoholMasBarato= cantidadUnidades;

		}
		else
		{
			if(precioz<precioalcoohlmas barato)
			{
				precioalco
			}
		}

	}