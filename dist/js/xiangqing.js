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
		//oDl[i].style.zIndex="-1";
		//console.log("aaa");
	}
}
var oFlat =document.getElementById("flat");
window.onscroll=function(){
	
	var oSt=document.documentElement.scrollTop||document.body.scrollTop;
	//console.log(oSt);
	if(oSt>300){
		oFlat.style.display="block";
	}else{
		oFlat.style.display="none";
	}
}

//放大镜

var oZoomBox = document.getElementById("xiang_tuo");
var oTub = document.getElementById("tuox_left11");
var oTuc = document.getElementById("tuox_left111");
var oBigArea = document.getElementById("tuox_left1");
var oBigImg = oBigArea.children[0];
//console.log(oBigImg);
oTub.onmouseover = function(){
	oTub.style.zIndex="666";
	oTuc.style.display = "block";
	oBigArea.style.display = "block";
	}
oTub.onmouseout = function(){
	oTuc.style.display = "none";
	oBigArea.style.display = "none";
	oTub.style.zIndex="0";
}
oTub.onmousemove = function(e){	
	var evt = e || event;
	var _left = evt.pageX -oZoomBox.offsetLeft - oTuc.offsetWidth/2;
	var _top = evt.pageY - oZoomBox.offsetTop -oTuc.offsetHeight/2;
	if(_left<=0){
					_left = 0;
				}
				if(_left >= oTub.offsetWidth-oTuc.offsetWidth){
					_left = oTub.offsetWidth-oTuc.offsetWidth;
				}
				
				if(_top<=0){
					_top = 0;
				}
				
				if(_top>=oTub.offsetHeight-oTuc.offsetHeight){
					_top=oTub.offsetHeight-oTuc.offsetHeight;
				}
	oTuc.style.left = _left + "px";
	oTuc.style.top = _top + "px";
	
	oBigImg.style.left = -oTuc.offsetLeft/oTub.offsetWidth*oBigImg.offsetWidth + "px";
	oBigImg.style.top = -oTuc.offsetTop/oTub.offsetHeight*oBigImg.offsetHeight + "px";
				
}
