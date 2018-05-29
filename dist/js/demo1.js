

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
$(function(){
	$.ajax({
		type:"get",
		url:"demo1.json",
		async:true,
		success:function(data){
			console.log(data.list1);
			let oDl_dt = $("#menu_dl dl");
			console.log(oDl_dt);
			
//			let $oDl=$("<dl id='dl_dt'></dl>");
//			$("#menu_dl").append($oDl);
			
			let $dt=$("<dt></dt>");
			let $dd=$("<dd class='dd_a'></dd>")
			let $oDiv = $("<div class='you'></div>");
			let $span=$("<span></span>");
			

			$dt.append($span);
			$span.text(data.list.list_yi);
			let oList_er=data.list.list_er;
			
			for (var i=0;i<oList_er.length;i++) {
				let $a=$("<a href=''></a>");
				$a.text(oList_er[i]);
				$dd.append($a);
			}

			/*二级*/
			$("#dl_dt").append($dt);
			$("#dl_dt").append($dd);
			$("#dl_dt").append($oDiv);

			/*二级标题里的内容*/
			let oList_you=(data.list.list_you);
			for (var n=0;n<oList_you.length;n++) {
				let $oLi = $("<li></li>");
				$oDiv.append($oLi);
				let $oh3 = $("<h3></h3>");
				$oLi.append($oh3);
				$oh3.text(oList_you[n]);
			
			
			let oList_you2=(data.list.list_you2);
			
				for (var k=0; k<oList_you2.length; k++ ) {
					let $oa = $("<a href=''></a>");
					//console.log(oList_you2[k]);
					$oa.text(oList_you2[k]);
					$oLi.append($oa);
				}
			}	
		}
		
	});
	$.ajax({
		type:"get",
		url:"demo1.json",
		async:true,
		success:function(data){
			console.log(data.list1);
			let oDl_dt = $("#menu_dl dl");
			console.log(oDl_dt);
			
			
			
			let $dt=$("<dt></dt>");
			let $dd=$("<dd class='dd_a'></dd>")
			let $oDiv = $("<div class='you'></div>");
			let $span=$("<span></span>");
			

			$dt.append($span);
			$span.text(data.list1.list_yi);
			let oList_er=data.list1.list_er;
			
			for (var i=0;i<oList_er.length;i++) {
				let $a=$("<a href=''></a>");
				$a.text(oList_er[i]);
				$dd.append($a);
			}

			/*二级*/
			$("#dl_dt1").append($dt);
			$("#dl_dt1").append($dd);
			$("#dl_dt1").append($oDiv);

			/*二级标题里的内容*/
			let oList_you=(data.list1.list_you);
			for (var n=0;n<oList_you.length;n++) {
				let $oLi = $("<li></li>");
				$oDiv.append($oLi);
				let $oh3 = $("<h3></h3>");
				$oLi.append($oh3);
				$oh3.text(oList_you[n]);
			
			
			let oList_you2=(data.list1.list_you2);
			
				for (var k=0; k<oList_you2.length; k++ ) {
					let $oa = $("<a href=''></a>");
					//console.log(oList_you2[k]);
					$oa.text(oList_you2[k]);
					$oLi.append($oa);
				}
			}	
		}
		
	});
	$.ajax({
		type:"get",
		url:"demo1.json",
		async:true,
		success:function(data){
			//console.log(data.list1);
			let oDl_dt = $("#menu_dl dl");
			//console.log(oDl_dt);
			
			
			
			let $dt=$("<dt></dt>");
			let $dd=$("<dd class='dd_a'></dd>")
			let $oDiv = $("<div class='you'></div>");
			let $span=$("<span></span>");
			

			$dt.append($span);
			$span.text(data.list2.list_yi);
			let oList_er=data.list2.list_er;
			
			for (var i=0;i<oList_er.length;i++) {
				let $a=$("<a href=''></a>");
				$a.text(oList_er[i]);
				$dd.append($a);
			}

			/*二级*/
			$("#dl_dt2").append($dt);
			$("#dl_dt2").append($dd);
			$("#dl_dt2").append($oDiv);

			/*二级标题里的内容*/
			let oList_you=(data.list2.list_you);
			for (var n=0;n<oList_you.length;n++) {
				let $oLi = $("<li></li>");
				$oDiv.append($oLi);
				let $oh3 = $("<h3></h3>");
				$oLi.append($oh3);
				$oh3.text(oList_you[n]);
			
			
			let oList_you2=(data.list2.list_you2);
			
				for (var k=0; k<oList_you2.length; k++ ) {
					let $oa = $("<a href=''></a>");
					//console.log(oList_you2[k]);
					$oa.text(oList_you2[k]);
					$oLi.append($oa);
				}
			}	
		}
		
	});
	$.ajax({
		type:"get",
		url:"demo1.json",
		async:true,
		success:function(data){
			//console.log(data.list1);
			let oDl_dt = $("#menu_dl dl");
			//console.log(oDl_dt);
			
			
			
			let $dt=$("<dt></dt>");
			let $dd=$("<dd class='dd_a'></dd>")
			let $oDiv = $("<div class='you'></div>");
			let $span=$("<span></span>");
			

			$dt.append($span);
			$span.text(data.list3.list_yi);
			let oList_er=data.list3.list_er;
			
			for (var i=0;i<oList_er.length;i++) {
				let $a=$("<a href=''></a>");
				$a.text(oList_er[i]);
				$dd.append($a);
			}

			/*二级*/
			$("#dl_dt3").append($dt);
			$("#dl_dt3").append($dd);
			$("#dl_dt3").append($oDiv);

			/*二级标题里的内容*/
			let oList_you=(data.list3.list_you);
			for (var n=0;n<oList_you.length;n++) {
				let $oLi = $("<li></li>");
				$oDiv.append($oLi);
				let $oh3 = $("<h3></h3>");
				$oLi.append($oh3);
				$oh3.text(oList_you[n]);
			
			
			let oList_you2=(data.list3.list_you2);
			
				for (var k=0; k<oList_you2.length; k++ ) {
					let $oa = $("<a href=''></a>");
					//console.log(oList_you2[k]);
					$oa.text(oList_you2[k]);
					$oLi.append($oa);
				}
			}	
		}
		
	});
	
	$.ajax({
		type:"get",
		url:"demo1.json",
		async:true,
		success:function(data){
			//console.log(data.list1);
			let oDl_dt = $("#menu_dl dl");
			//console.log(oDl_dt);
			
			
			
			let $dt=$("<dt></dt>");
			let $dd=$("<dd class='dd_a'></dd>")
			let $oDiv = $("<div class='you'></div>");
			let $span=$("<span></span>");
			

			$dt.append($span);
			$span.text(data.list4.list_yi);
			let oList_er=data.list4.list_er;
			
			for (var i=0;i<oList_er.length;i++) {
				let $a=$("<a href=''></a>");
				$a.text(oList_er[i]);
				$dd.append($a);
			}

			/*二级*/
			$("#dl_dt4").append($dt);
			$("#dl_dt4").append($dd);
			$("#dl_dt4").append($oDiv);

			/*二级标题里的内容*/
			let oList_you=(data.list4.list_you);
			for (var n=0;n<oList_you.length;n++) {
				let $oLi = $("<li></li>");
				$oDiv.append($oLi);
				let $oh3 = $("<h3></h3>");
				$oLi.append($oh3);
				$oh3.text(oList_you[n]);
			
			
			let oList_you2=(data.list4.list_you2);
			
				for (var k=0; k<oList_you2.length; k++ ) {
					let $oa = $("<a href=''></a>");
					//console.log(oList_you2[k]);
					$oa.text(oList_you2[k]);
					$oLi.append($oa);
				}
			}	
		}
		
	});
	$.ajax({
		type:"get",
		url:"demo1.json",
		async:true,
		success:function(data){
			//console.log(data.list1);
			let oDl_dt = $("#menu_dl dl");
			//console.log(oDl_dt);
			
//			let $oDl=$("<dl id='dl_dt'></dl>");
//			$("#menu_dl").append($oDl);
			
			let $dt=$("<dt></dt>");
			let $dd=$("<dd class='dd_a'></dd>")
			let $oDiv = $("<div class='you'></div>");
			let $span=$("<span></span>");
			

			$dt.append($span);
			$span.text(data.list5.list_yi);
			let oList_er=data.list5.list_er;
			
			for (var i=0;i<oList_er.length;i++) {
				let $a=$("<a href=''></a>");
				$a.text(oList_er[i]);
				$dd.append($a);
			}

			/*二级*/
			$("#dl_dt5").append($dt);
			$("#dl_dt5").append($dd);
			$("#dl_dt5").append($oDiv);

			/*二级标题里的内容*/
			let oList_you=(data.list5.list_you);
			for (var n=0;n<oList_you.length;n++) {
				let $oLi = $("<li></li>");
				$oDiv.append($oLi);
				let $oh3 = $("<h3></h3>");
				$oLi.append($oh3);
				$oh3.text(oList_you[n]);
			
			
			let oList_you2=(data.list5.list_you2);
			
				for (var k=0; k<oList_you2.length; k++ ) {
					let $oa = $("<a href=''></a>");
					//console.log(oList_you2[k]);
					$oa.text(oList_you2[k]);
					$oLi.append($oa);
				}
			}	
		}
		
	});
	$.ajax({
		type:"get",
		url:"demo1.json",
		async:true,
		success:function(data){
			//console.log(data.list1);
			let oDl_dt = $("#menu_dl dl");
			//console.log(oDl_dt);
			
//			let $oDl=$("<dl id='dl_dt'></dl>");
//			$("#menu_dl").append($oDl);
			
			let $dt=$("<dt></dt>");
			let $dd=$("<dd class='dd_a'></dd>")
			let $oDiv = $("<div class='you'></div>");
			let $span=$("<span></span>");
			

			$dt.append($span);
			$span.text(data.list6.list_yi);
			let oList_er=data.list6.list_er;
			
			for (var i=0;i<oList_er.length;i++) {
				let $a=$("<a href=''></a>");
				$a.text(oList_er[i]);
				$dd.append($a);
			}

			/*二级*/
			$("#dl_dt6").append($dt);
			$("#dl_dt6").append($dd);
			$("#dl_dt6").append($oDiv);

			/*二级标题里的内容*/
			let oList_you=(data.list6.list_you);
			for (var n=0;n<oList_you.length;n++) {
				let $oLi = $("<li></li>");
				$oDiv.append($oLi);
				let $oh3 = $("<h3></h3>");
				$oLi.append($oh3);
				$oh3.text(oList_you[n]);
			
			
			let oList_you2=(data.list6.list_you2);
			
				for (var k=0; k<oList_you2.length; k++ ) {
					let $oa = $("<a href=''></a>");
					//console.log(oList_you2[k]);
					$oa.text(oList_you2[k]);
					$oLi.append($oa);
				}
			}	
		}
		
	});
	$.ajax({
		type:"get",
		url:"demo1.json",
		async:true,
		success:function(data){
			//console.log(data.list1);
			let oDl_dt = $("#menu_dl dl");
			//console.log(oDl_dt);
			
//			let $oDl=$("<dl id='dl_dt'></dl>");
//			$("#menu_dl").append($oDl);
			
			let $dt=$("<dt></dt>");
			let $dd=$("<dd class='dd_a'></dd>")
			let $oDiv = $("<div class='you'></div>");
			let $span=$("<span></span>");
			

			$dt.append($span);
			$span.text(data.list7.list_yi);
			let oList_er=data.list7.list_er;
			
			for (var i=0;i<oList_er.length;i++) {
				let $a=$("<a href=''></a>");
				$a.text(oList_er[i]);
				$dd.append($a);
			}

			/*二级*/
			$("#dl_dt7").append($dt);
			$("#dl_dt7").append($dd);
			$("#dl_dt7").append($oDiv);

			/*二级标题里的内容*/
			let oList_you=(data.list7.list_you);
			for (var n=0;n<oList_you.length;n++) {
				let $oLi = $("<li></li>");
				$oDiv.append($oLi);
				let $oh3 = $("<h3></h3>");
				$oLi.append($oh3);
				$oh3.text(oList_you[n]);
			
			
			let oList_you2=(data.list7.list_you2);
			
				for (var k=0; k<oList_you2.length; k++ ) {
					let $oa = $("<a href=''></a>");
					//console.log(oList_you2[k]);
					$oa.text(oList_you2[k]);
					$oLi.append($oa);
				}
			}	
		}
		
	});

});
