//pereyra hernan

function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;
	
	
	switch(mesDelAño)
    {
    	case "Enero":
    	  mensaje = "Que comiences bien el año!!!";
    	break;

    	case "Julio":
    	  mensaje = "se vienen las vacaciones!!!";
    	break;

    	case "Diciembre":
    	  mensaje="Felices fiestas!!!";
    	break;	    
    }
    alert(mensaje);

}//FIN DE LA FUNCIÓN