var mazo=[ 
{url:"img./cartas/AmonRa.png",texto:"Amon Ra",id:1} ,
{url:"img./cartas/Alicel.png",texto:"Alicel",id:2} ,
{url:"img./cartas/Aliot.png",texto:"Aliot",id:3} , 
{url:"img./cartas/Aliza.png",texto:"Aliza",id:4}, 
{url:"img./cartas/Armaia.png",texto:"Armaia",id:5},
{url:"img./cartas/Ermes.png",texto:"Ermes",id:6},
{url:"img./cartas/Baphomet.png",texto:"Baphomet",id:7},
{url:"img./cartas/Beelzebub.png",texto:"Beelzebub",id:8},
{url:"img./cartas/Dimik.png",texto:"Dimik",id:9},
{url:"img./cartas/Dracula.png",texto:"Dracula",id:10},
{url:"img./cartas/Drake.png",texto:"Drake",id:11},
{url:"img./cartas/Garm.png",texto:"Garm",id:12},
{url:"img./cartas/Gemini.png",texto:"Gemini",id:13} ,
{url:"img./cartas/KWindstorm.png",texto:"Windstorm",id:14},
{url:"img./cartas/Seyeren.png",texto:"Seyeren",id:15},
{url:"img./cartas/Magaleta.png",texto:"Magaleta",id:16},
{url:"img./cartas/Maya.png",texto:"Maya",id:17},
{url:"img./cartas/Moonligth.png",texto:"Moonligth",id:18},
{url:"img./cartas/Osiris.png",texto:"Osiris",id:19},
{url:"img./cartas/Plasma.png",texto:"Plasma",id:20},
{url:"img./cartas/Randgris.png",texto:"Randgris",id:21},
{url:"img./cartas/Removal.png",texto:"Removal",id:22},
{url:"img./cartas/RSX.png",texto:"RSX",id:23},
{url:"img./cartas/Shecil.png",texto:"Shecil",id:24},
{url:"img./cartas/Skogul.png",texto:"Skogul",id:25},
{url:"img./cartas/Thanathos.png",texto:"Thanathos",id:26},
{url:"img./cartas/Venomus.png",texto:"Venomus",id:27},
{url:"img./cartas/Viola.png",texto:"Viola",id:28},
{url:"img./cartas/Crusader.png",texto:"Crusader",id:29},
{url:"img./cartas/Alchemist.png",texto:"Alchemist",id:30},
{url:"img./cartas/Sage.png",texto:"Sage",id:31},
{url:"img./cartas/Novus.png",texto:"Novus",id:32},
{url:"img./cartas/Beholder.png",texto:"Beholder",id:33},
{url:"img./cartas/Acidus.png",texto:"Acidus",id:34},
{url:"img./cartas/Priest.png",texto:"Priest",id:35}
];

var pos=0;

function sacarCarta()
{
	if(pos<mazo.length)
	{
		var img=getElemento("img");
		img.setPropiedad("style","background-image : url('"+mazo[pos].url+"');");
		img.setPropiedad("idCard",mazo[pos].id);
		var txt=getElemento("txt");
		txt.setText(mazo[pos].texto);
		pos++;
		actualizarContador();	
	}
	else
	{
		alert("Acabamos");
	}
}