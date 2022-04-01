/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
//Pereyra Hernan.
 */

/*function CalcularPrecio () 
{
 	let cantidadDeLamparas;
    let marca;
    let precioUnidad;
    let precioTotal;
    let porcentaje;
    let descuento;
    let precioConDescuento;
    let ingresoBruto;
    let impuesto;

    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    marca = document.getElementById("Marca").value;

    porcentaje = 0;

    precioUnidad = 35;

    precioTotal = precioUnidad*cantidadDeLamparas;

    
    if(cantidadDeLamparas>5)
    {
        porcentaje = 50;
    }
    else
    {
        if(cantidadDeLamparas>4)
        {
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 40;
            }
            else
            {
                porcentaje = 30;
            }
        }
        else
        {
            if(cantidadDeLamparas>3)
            {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    porcentaje = 25;
                }
                else
                {
                    porcentaje = 20;
                }
            }
            else
            {
                if(cantidadDeLamparas>2)
                {
                    if(marca == "ArgentinaLuz")
                    {
                        porcentaje = 15;
                    }
                    else
                    {
                        if(marca == "FelipeLamparas")
                        {
                            porcentaje = 10;
                        }
                        else
                        {
                            porcentaje = 5;
                        }
                    }
                }
            }
        }
    }


   descuento = (precioTotal*porcentaje)/100;
   precioConDescuento= precioTotal - descuento;

   if(precioConDescuento>120)
   {
      impuesto=(precioConDescuento*10)/100;
      ingresoBruto=impuesto+precioConDescuento;

      alert("Usted pago " + ingresoBruto + " de IIBB,siendo "+ impuesto + " el impuesto que se pagó.");
   }

   document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
}

 switch
 */
 function CalcularPrecio () 
{
    let cantidadDeLamparas;
    let marca;
    let precioUnidad;
    let precioTotal;
    let porcentaje;
    let descuento;
    let precioConDescuento;
    let ingresoBruto;
    let impuesto;

    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    marca = document.getElementById("Marca").value;

    porcentaje = 0;

    precioUnidad = 35;

    precioTotal = precioUnidad*cantidadDeLamparas;

    
    switch(cantidadDeLamparas)
  {

    case 3:
      switch(marca)
      {
        case "ArgentinaLuz":
          porcentaje = 15;

        break;
        case "FelipeLamparas":

          porcentaje = 10;

        break;
        default:
          porcentaje = 5;

        break;
      }
    break;

    case 4:
      switch(marca)
      {
        case "ArgentinaLuz":
        case "FelipeLamparas":
          porcentaje = 25;
        break;
        default:
          porcentaje = 20;
        break;
      }

    break;
    case 5:
      switch(marca)
      {
        case "ArgentinaLuz":
          porcentaje = 40;
        break;
        default:
          porcentaje = 30;
        break;
      }
    break;
    case 2:
    case 1:
      porcentaje = 0;
    break;

  }


   descuento = (precioTotal*porcentaje)/100;
   precioConDescuento= precioTotal - descuento;

   if(precioConDescuento>120)
   {
      impuesto=(precioConDescuento*10)/100;
      ingresoBruto=impuesto+precioConDescuento;

      alert("Usted pago " + ingresoBruto + " de IIBB,siendo "+ impuesto + " el impuesto que se pagó.");
   }

   document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
}