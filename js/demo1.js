//<script type="text/javascript">
$(function(){
	var $LBt=$("#lunbo div");
	//console.log($LBt);
	$LBt.eq(0).fadeIn(50);
	var i=0;
	var timer=setInterval(function(){
		i++;
		if(i==$LBt.length){
			i=0;
		}
		
		$LBt.eq(i).fadeIn(200).siblings().fadeOut(300);
		
	},2000)
})

var oFlat =document.getElementById("flat");
window.onscroll=function(){
	
	var oSt=document.documentElement.scrollTop||document.body.scrollTop;
	console.log(oSt);
	if(oSt>300){
		oFlat.style.display="block";
	}else{
		oFlat.style.display="none";
	}
}

