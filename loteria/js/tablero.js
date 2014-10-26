var jugadores;
var x;
var y;
var tabJuego;//Arreglo
var curr;

var marcador=[0,0,0,0];

function Vjugar()
{
	//Debo de limpiar el html
	var a=getElemento("Nrestante");
	a.innerHTML="";
	a=getElemento("pestanas");
	a.innerHTML="";
	a=getElemento("rejas");
	a.innerHTML="";
	a=getElemento("img");
	//a.innerHTML="";
	a.setPropiedad("style","");	
	a=getElemento("txt");
	a.innerHTML="";

	
	jugar();
}

function ocultar()
{	
	var a=getElemento("ganador");
	a.setPropiedad("style","display:none")
}
function mostrar(ganador)
{	
	var a=getElemento("ganador");
	a.setPropiedad("style","display:inline")
	var b=getElemento("jGanador");
	b.innerHTML=ganador;
}
function actualizarContador()
{
	var cnt=getElemento("nContador");
	cnt.innerHTML=(35-pos);
}

//Mezcaldo Fisher
function barajar()
{
	for(var i=0;i<mazo.length-1;i++)
	{
		var j=Math.floor(Math.random() * mazo.length - i);
		temp=mazo[j+i];
		mazo[j+i]=mazo[i];
		mazo[i]=temp;
	}
		
}
function barajarG(arr)
{
	for(var i=0;i<arr.length-1;i++)
	{
		var j=Math.floor(Math.random() * arr.length - i);
		temp=arr[j+i];
		arr[j+i]=arr[i];
		arr[i]=temp;
	}
		
}
function jugar()
{
	tabJuego=[];
	marcador=[0,0,0,0]
	pos=0;
	curr=1;
	//Colocar contador nContador
	actualizarContador();
	ocultar();

	//mezclamos el Mazo
	//Cortesia de http://www.ngeeks.com/javascript-avanzado-desordenar-un-array/
	//Funcion problematica, NO genera distribuciones uniformes, el barajado puede estar viciado

	//mazo=mazo.sort(function(){return Math.random() - 0.5});
	barajar();
	do
	{
		jugadores=prompt("Cuantos jugadores son:","2");
	}while(jugadores<2 || jugadores>4)
	
	do
	{
		x=prompt("Cuantas Columnas?:","3");
	}while(x<3 || jugadores>4)

	do
	{
		y=prompt("Cuantas Filas?:","3");
	}while(y<3 || y>4)

	tableros();
}

function tableros()
{
	for(var i=0;i<jugadores;i++)
	{
		var lugar=getElemento("pestanas");
		var pestana=crearElemento("div","pj"+(i+1));
		pestana.setPropiedad("jugador",i+1);
		pestana.setClass("pestana");
		pestana.addClass("Pinactivo");
		pestana.addText("Jugador "+(i+1));
		lugar.addElemento(pestana);
		pestana.setPropiedad("onclick","cambioTablero(this);");


		var reja=getElemento("rejas");
		var tablero=crearElemento("div","j"+(i+1));
		tablero.setClass("tablero");
		tablero.addClass("inactivo");
		if(i==0)
		{
			pestana.removeClass("Pinactivo");
			pestana.addClass("Pactivo");
			tablero.removeClass("inactivo");
			tablero.addClass("activo");
		}

		reja.addElemento(tablero);

		//A cada jugador le asignamos un tablero
		var tj=[];
		var mezclar=[];
		for (var j = 0 ; j < 35 ; j++)
			mezclar.push(j);

		barajarG(mezclar);
		//mezclar=mezclar.sort(function(){return Math.random() - 0.5});

		for (var j = 0 ; j < x*y ; j++)
			tj.push(mezclar[j]);
			
		tabJuego.push(tj);

		var tabla=crearElemento("table","tpj"+(i+1));
		tablero.addElemento(tabla);

		for(var k = 0; k<y; k++) {
			var tr=crearElemento("tr","");
			for(var l = 0; l<x; l++) {
				var td=crearElemento("td","");
				var div=crearElemento("div","");
				td.addElemento(div);
				tr.addElemento(td);

				div.setClass("imgTablero");
				div.setPropiedad("style","background-image : url('"+mazo[tj[x*k+l]].url+"');");
				div.setPropiedad("title",mazo[tj[x*k+l]].texto);
				div.setPropiedad("idCard",mazo[tj[x*k+l]].id);
				div.setPropiedad("onclick","probar(this)");

			};	
			tabla.addElemento(tr);
		};
	}
};

function cambioTablero(pestana){
	
	pestana.addClass("Pactivo");
	pestana.removeClass("Pinactivo");
	//alert(pestana.getPropiedad("jugador"));	
	var j=pestana.getPropiedad("jugador");
	//La reja a esconder
	var ocultar=getElemento("j"+curr);
	ocultar.removeClass("activo");
	ocultar.addClass("inactivo");

	var mostrar=getElemento("j"+j);
	mostrar.addClass("activo");
	mostrar.removeClass("inactivo");

	var apagar=getElemento("pj"+curr);
	apagar.removeClass("Pactivo");
	apagar.addClass("Pinactivo");

	var encender=getElemento("pj"+j);
	encender.addClass("Pactivo");
	encender.removeClass("Pinactivo");


	curr=j;
};

function probar(cas)
{
	var carta=getElemento("img").getPropiedad("idCard");
	var casilla=cas.getPropiedad("idCard");
	if(carta==null)
		alert("No has sacado ninguna Carta")
	else
	{
		if(cas.getPropiedad("Lista")==null)
		{
			if(carta==casilla)
				{	
					cas.setPropiedad("Lista","ok")
					var ficha=crearElemento("div","");
					ficha.setClass("ficha");
					cas.addElemento(ficha);
					marcador[curr-1]++;

					if(marcador[curr-1]==x*y)
					{
						alert("jugador "+curr+" ha ganado");
						mostrar("Jugador "+curr);
					}
				}
		}
	}
}