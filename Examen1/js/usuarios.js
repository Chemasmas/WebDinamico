var usuarios=[ 
{url:"img/AmonRa.png",texto:"Carlos",id:1} ,
{url:"img/Alicel.png",texto:"Ana",id:2} ,
{url:"img/Aliot.png",texto:"Julian",id:3} 
];



//Necesito Definir quien comenta, usare una variable global para saber quien esta conectado
var curr=0; //el id del usuario activo
var nPub=0;

function cargar()
{
	var usrDiv=document.getElementById("usuarios");
	//necesito agregar un div por usuario
	for (var i = 0 ; i<usuarios.length ; i++) {
		var nuevoDiv=document.createElement("div");
		//al div, le colocare dos divs internos
		var imagen=document.createElement("div");
		var text=document.createElement("div");

		imagen.setAttribute("class","avatarG");
		imagen.setAttribute("style","background-image : url('"+usuarios[i].url+"');");

		text.setAttribute("class","nombreG");
		text.appendChild(document.createTextNode(usuarios[i].texto));

		nuevoDiv.setAttribute("curr",usuarios[i].id);
		nuevoDiv.setAttribute("class","usuarioSel");
		nuevoDiv.setAttribute("onclick","cambiarUsuario(this);");
		nuevoDiv.setAttribute("id","usr"+usuarios[i].id);

		nuevoDiv.appendChild(imagen);
		nuevoDiv.appendChild(text);
		
		usrDiv.appendChild(nuevoDiv);
	};
	
	//Creare la caja de comentarios
	cajaComentario();
}

function cajaComentario()
{
	//La caja de comentarios es un div que se carga, antes de todo el html que habia previamente en el contenedor;
	var faceDiv=document.getElementById("FaceBook");
	//Solo se crea un div
	var nuevoDiv=document.createElement("div");
	nuevoDiv.setAttribute("class","comentario");

	var imagen=document.createElement("div");
	imagen.setAttribute("class","avatarCH");
	imagen.setAttribute("style","background-image : url('"+usuarios[curr].url+"');");	

	//Debemos Crear el Boton que hara el post y la input del post
	var boton=document.createElement("input");
	boton.setAttribute("type","button");
	boton.setAttribute("value","Post");
	boton.setAttribute("class","btnPost");
	boton.setAttribute("curr","btnPost");
	boton.setAttribute("onclick","postear();"); //Funciona


	var input=document.createElement("input");
	input.setAttribute("id","post");
	input.setAttribute("type","text");
	input.setAttribute("class","inPost");

	nuevoDiv.appendChild(imagen);
	nuevoDiv.appendChild(input);
	nuevoDiv.appendChild(boton);
	faceDiv.appendChild(nuevoDiv);
}
function cambiarUsuario(elem)
{
	//elem , es el div donde esta el usuario
	var temp=elem.getAttribute("curr")-1;
	curr=temp;

	//a cambiar todas las imagenes
	var cambio=document.getElementsByClassName("avatarCH");
	for (var i = 0 ; i<cambio.length ; i++)
	{
		cambio[i].setAttribute("style","background-image : url('"+usuarios[curr].url+"');");	
	}

	/*
	var likes=document.getElementsByClassName("like");
	for (var i = 0 ; i<cambio.length ; i++)
	{
		if()
	}
	*/
}
function postear()
{
	//Esto modificara el contenido de feed
	var input=document.getElementById("post");
	var post=input.value;
	input.value="";

	//Crearemos la publicacion
	//Necesitamos lo que hubiera antes de ponerla
	var feed=document.getElementById("feed");
	var prev=feed.innerHTML;

	var pub=cajaPublicacion(post);

	feed.innerHTML=pub.innerHTML+"<br>"+prev;
}
function cajaPublicacion(publicacion)
{
	var envoltorio=document.createElement("div");
	//Solo se crea un div
	var nuevoDiv=document.createElement("div");
	nuevoDiv.setAttribute("class","publicacion");
	nuevoDiv.setAttribute("id","pub"+(nPub++));
	//nuevoDiv.setAttribute("id","pub"+(nPub++);

	var imagen=document.createElement("div");
	imagen.setAttribute("class","avatarCHP");//este no debe de cambiar
	imagen.setAttribute("style","background-image : url('"+usuarios[curr].url+"');");	

	//Aqui no llevara boton, lleva un link de me gusta
	var link=document.createElement("a");
	link.setAttribute("class","like");
	link.setAttribute("onclick","like(this);");
	link.appendChild(document.createTextNode("Like"));

	
	var contenido=document.createElement("div");
	contenido.setAttribute("class","contenido");
	contenido.appendChild(document.createTextNode(publicacion));


	nuevoDiv.appendChild(imagen);
	nuevoDiv.appendChild(contenido);
	nuevoDiv.appendChild(document.createElement("br"));
	nuevoDiv.appendChild(link);
	nuevoDiv.appendChild(document.createElement("br"));

//Colocare la caja de el comentario del comentario y una para los comentariso ya hechos
	var comentario=SubCom(nuevoDiv);
	nuevoDiv.appendChild(document.createElement("br"));
	envoltorio.appendChild(nuevoDiv);
	return envoltorio;
}

//Debe de agegar un subcomentario al elemento, basta con un append
function SubCom(elem)
{
	var divP=document.createElement("div");
	divP.setAttribute("class","subC");
	divP.setAttribute("id","S"+elem.getAttribute("id"));

	var imagen=document.createElement("div");
	imagen.setAttribute("class","avatarCH");
	imagen.setAttribute("style","background-image : url('"+usuarios[curr].url+"');");	

	var input=document.createElement("input");
	input.setAttribute("id","post"+elem.getAttribute("id"));
	input.setAttribute("type","text");
	input.setAttribute("class","inPost");

	var boton=document.createElement("input");
	boton.setAttribute("type","button");
	boton.setAttribute("value","Post");
	boton.setAttribute("class","btnPost");
	boton.setAttribute("curr","btnPost");
	boton.setAttribute("cId",elem.getAttribute("id"));
	//boton.setAttribute("cId",elem.getAttribute("id"));
	boton.setAttribute("onclick","Subpostear(this);"); //Funciona

	divP.appendChild(imagen);
	divP.appendChild(input);
	divP.appendChild(boton);

	elem.appendChild(divP);
}	
function Subpostear(com)
{
	var id=com.getAttribute("cId");
	var a=document.getElementById("S"+id);


	var input=document.getElementById("post"+id);
	var post=input.value;
	input.value="";

	//Crearemos la publicacion
	//Necesitamos lo que hubiera antes de ponerla
	//var feed=document.getElementById("feed");
	var prev=a.innerHTML;

	var pub=cajaSubPublicacion(post);
	a.innerHTML=pub.innerHTML+"<br>"+prev;	
	
}

function cajaSubPublicacion(publicacion)
{
	var envoltorio=document.createElement("div");
	//Solo se crea un div
	var nuevoDiv=document.createElement("div");
	nuevoDiv.setAttribute("class","Spublicacion");
	nuevoDiv.setAttribute("id","pub"+(nPub++));
	//nuevoDiv.setAttribute("id","pub"+(nPub++);

	var imagen=document.createElement("div");
	imagen.setAttribute("class","avatarCHP");//este no debe de cambiar
	imagen.setAttribute("style","background-image : url('"+usuarios[curr].url+"');");	

	//Aqui no llevara boton, lleva un link de me gusta
	var link=document.createElement("a");
	link.setAttribute("class","like");
	link.setAttribute("onclick","like(this);");
	

	link.appendChild(document.createTextNode("Like"));

	
	var contenido=document.createElement("div");
	contenido.setAttribute("class","contenido");
	contenido.appendChild(document.createTextNode(publicacion));


	nuevoDiv.appendChild(imagen);
	nuevoDiv.appendChild(contenido);
	nuevoDiv.appendChild(link);

	envoltorio.appendChild(nuevoDiv);
	return envoltorio;
}

function like(elem)
{
	//Esto NO es correcto, pero  fue la solucion que se me ocurrio en el momento
	if(elem.getAttribute("like"+curr)=='undefined')
		elem.setAttribute("like"+curr,"si");
	else
	{
		if(elem.getAttribute("like"+curr)=="si")
			elem.setAttribute("like"+curr,"no");
		else
			elem.setAttribute("like"+curr,"si");	
	}

	var cnt=0;
	var ok="";
	if(elem.getAttribute("like0")=="si")
	{
		ok=ok+usuarios[0].texto+",";
		cnt++;
	}
	if(elem.getAttribute("like1")=="si")
	{
		ok=ok+usuarios[1].texto+",";
		cnt++;
	}
	if(elem.getAttribute("like2")=="si")
	{
		ok=ok+usuarios[2].texto+",";
		cnt++;
	}
	if(ok=="")
		ok="Nadie";

	elem.setAttribute("title","Esto le gusta a : "+ok);	
	if(cnt==0)
		elem.innerHTML="Like";
	else
		elem.innerHTML=cnt+" Like(s)";
}
