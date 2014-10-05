var mazo=[ 
{url:"img./cartas/AmonRa.png",texto:"Amon Ra",id:1} ,
{url:"img./cartas/Alicel.png",texto:"Alicel",id:2} ,
{url:"img./cartas/Aliot.png",texto:"Aliot",id:3} , 
{url:"img./cartas/Aliza.png",texto:"Aliza",id:4} 
];
var pos=0;
function sacarCarta()
{
	//alert("cartaa!!");
	if(pos<mazo.length)
	{
		var img=dameElemento("img");
		setPropiedad(img,"style","background-image : url('"+mazo[pos].url+"');");
		setPropiedad(img,"nCarta",mazo[pos].id);
		var txt=dameElemento("txt");
		setTexto(txt,mazo[pos].texto);
		pos++;
	}
	else
	{
		alert("Acabamos");
	}
}