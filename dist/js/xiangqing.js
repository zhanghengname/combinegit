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