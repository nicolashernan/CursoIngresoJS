//pereyra hernan nicolas
function mostrar()
{
	let numeroRandom;
    //Genero el número RANDOM entre 1 y 10
	numeroRandom=Math.floor(Math.random() * 10) + 1;

	alert("Su nota es: "+numeroRandom);

	if(numeroRandom>8)
	{
       //numero random 9 y 10
	   alert("EXELENTE");

	}else
	{
        if(numeroRandom<4)
		{
			//numero random menor a 4
			alert("Vamos,la proxima se puede");
		}else
	       {
		       //numero random 4,5,6,7,8
		       alert("APROBO");
		   }
	} 
}//FIN DE LA FUNCIÓN