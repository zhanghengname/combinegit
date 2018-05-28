

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

