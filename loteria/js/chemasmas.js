function addMetodos(elem)
{
	//funciones
	elem.setId=function(idStr){
		this.setAttribute("id",idStr);
	};
	elem.setClass=function(classStr)
	{
		this.setAttribute("class",classStr);
	};
	elem.getClass=function(classStr)
	{
		this.getAttribute("class",classStr);
	};
	//De preferencia usar este sobre setClass
	elem.addClass=function(classStr)
	{
		var temp=this.getAttribute("class")+" "+classStr;
		this.setAttribute("class",temp);
	};
	elem.removeClass=function(classStr)
	{
		var temp=this.getAttribute("class");
		var temp2=temp.replace(classStr,"");
		this.setAttribute("class",temp2);
	};
	//Usar con cuidado, aun no esta perfeccionada
	//Solo funciona si envias string o Object
	elem.addElemento=function(nElem)
	{
		if(typeof(nElem)=='object')//Es referencia al objeto completo
		{
			this.appendChild(nElem);
		}
		if(typeof(nElem)=='string')//Sera el type del nuevo elemento
		{
			this.appendChild(crearElemento(nElem,"test"));
		}
	};
	elem.addText=function(text)
	{
			this.appendChild(document.createTextNode(text));
	};
	//Cuidado, aun no esta completo, destruira todo el html bajo un elemento
	elem.setText=function(text)
	{
			this.innerHTML=text;
	};
	elem.setPropiedad=function (propiedad,valor)
	{
		this.setAttribute(propiedad,valor);
	}
	elem.getPropiedad=function (propiedad)
	{
		return this.getAttribute(propiedad);
	}
}

//Ubica un elemento por su id, ademas le agrega funciones utiles
function getElemento(id)
{
	var t=document.getElementById(id);
	addMetodos(t);
	return t;
}
function crearElemento(type,id)
{
	var t=document.createElement(type);
	addMetodos(t);
	t.setId(id)
	return t;
}

