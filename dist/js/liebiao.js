

var oMenu=document.getElementById("menu_h");
var oDl=document.getElementsByTagName("dl");
var oMenus=document.getElementById("menu");
var oMenu_div=document.getElementById("menu_div");
oMenu_div.onmouseover=function(){
	for (var i=0; i<oDl.length; i++) {
		oDl[i].style.display="block";
	}
	
}
oMenu_div.onmouseout=function(){
		
	for (var i=0; i<oDl.length; i++) {
		oDl[i].style.display="none";
		//console.log("aaa");
	}
}
var oShuliao=document.getElementById("shuliang");
var sFlat=document.getElementById("flat_rght");
var oFlat_span=document.getElementById("flat_span1");

window.onscroll=function(){
	var Stop=document.documentElement.scrollTop||document.body.scrollTop;
	
	if(Stop>400){
		oShuliao.style.position="fixed";
		sFlat.style.display="block";
		//console.log("aa");
	}else{
		oShuliao.style.position="relative";
		sFlat.style.display="none";
		
	}
	
}
