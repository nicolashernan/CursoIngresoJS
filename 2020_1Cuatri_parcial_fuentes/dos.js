function mostrar()
{
  let tipoMaterial;
  let cantidadDeBolsas;
  let precioPorBolsa;
  let respuesta;
  let porcentaje;
  let precioBruto;

  respuesta = true;

  while(respuesta == true)
  {
  	tipoMaterial = prompt("Ingrese el tipo de materia.");

  	while(tipoMaterial!="arena" && tipoMaterial!="cal" && tipoMaterial!="cemento")
  	{

  		tipoMaterial = prompt("Error,ingrese arena,cal o cemento.");

	}

	cantidadDeBolsas = prompt("Ingrese la cantidad de bolsas.");
	cantidadDeBolsas = parseInt(cantidadDeBolsas);

	precioPorBolsa = prompt("Ingrese el precio por bolsa.");

	while(precioPorBolsa<1)
	{
		precioPorBolsa = prompt("Error,Ingrese un precio mayor a 0.")
		precioPorBolsa = parseInt(precioPorBolsa);
	}

	


  	respuesta = confirm("Ingresar otro producto?");

  }
  //Fin validacion







  if(cantidadDeBolsas>30)
  {
  	porcentaje = 25;
  }
  else
  {
  	if(cantidadDeBolsas<30 && cantidadDeBolsas>10)
  	{
  		porcentaje = 15;
  	}
  	else
  	{
  		porcentaje = 0;
  	}
  }




}


