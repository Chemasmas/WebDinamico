var jugadores;

function jugar()
{
	//mezclamos el array 
	//Cortesia de http://www.ngeeks.com/javascript-avanzado-desordenar-un-array/
	mazo=mazo.sort(function() {return Math.random() - 0.5});
	do
	{
		jugadores=prompt("Cuantos jugadores son:","2");
	}while(jugadores<2 || jugadores>4)
	
	alert("Jugadores: "+jugadores);

	tableros();
}

function tableros()
{
	for(var i=0;i<jugadores;i++)
	{
		var tem=agregaElemento("tableros","div");
		setId(tem,"j"+(i+1));
	}
}


//Utilerias
function dameElemento(id)
{
	return document.getElementById(id);
}
function crearElemento(elem)
{
	return document.createElement(elem);
}
function agregaElemento(id,elem){
	var a=crearElemento(elem);
	dameElemento(id).appendChild(a);
	return a;
}
function setId(elemObj,idStr)
{
	elemObj.setAttribute("id",idStr);
}
function setPropiedad(elemObj,propiedad,valor)
{
	elemObj.setAttribute(propiedad,valor);
}
function setTexto(elemObj,texto)
{
	elemObj.innerHTML="";
	elemObj.innerText="";
	elemObj.appendChild(document.createTextNode(texto));
}