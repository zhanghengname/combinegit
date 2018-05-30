

			let oTxt = document.getElementById("shousuo");
			let oList = document.getElementById("list");
			let oBtn  = document.getElementById("btn");		
				oTxt.oninput = function(){
					var val = this.value;
					var oScript = document.createElement("script");
					oScript.src = "https://suggest.taobao.com/sug?code=utf-8&q="+val+"&_ksTS=1525999623209_411&callback=jsonp412&k=1&area=c2c&bucketid=10"
					document.body.appendChild(oScript);
					document.body.removeChild(oScript);
					if(val){
						oList.style.display='block'
					}else{
						oList.style.display='none'
					}					
				}
				document.onmousedown = function(e){
					let evt = e || event ;
					let _target = evt.target || evt.srcElement;
					console.log(_target)
				}
				function jsonp412(date){
					let arr = date.result;
					let arr1 = date.magic;
					let str = "";
					//console.log(arr1)
					for(let i = 0;i<arr.length;i++){ //添加下拉列表
						str+=`<li><p class="left">${arr[i][0]}</p></li>`
					}
					
					oList.innerHTML = str;
					for(let i = 0 ;i<oList.children.length;i++){ //点击替换输入框的值
						oList.children[i].onclick = function(e){
							let evt = e || event;
							console.log("aaa")
							oTxt.value = this.children[0].innerHTML;
							//console.log(this.children[0]);
							return evt.cancelBubble = true;
						}
					}
					let index = null;
					if(arr1!=undefined){
						for(let i=0;i<arr1.length;i++){  //添加二级菜单
							index = arr1[i].index;
							let arr2 = arr1[i].data;
							let str1 = "";
							for(let j = 0 ; j<arr2.length;j++){
								for(let k=0;k<arr2[j].length;k++){
									if(arr2[j][k].type == 'hot'){
										str1 += `<li class='hot click'>${arr2[j][k].title}</li>`
									}else{
										str1 += `<li class='click'>${arr2[j][k].title}</li>`
									}
								}
								str1 +=`<br />`
							}
							let list1 = document.createElement("ul");
							let tx = oList.children[index-1].children[0].innerHTML;
							list1.className = "inner";
							list1.innerHTML =  `<p>${tx}</p>` +str1;
							oList.children[index-1].innerHTML += `<span>&gt;</span>`;
							oList.children[index-1].appendChild(list1) 
							oList.children[index-1].onmouseover = function(){
									this.children[2].style.display = "block";
									this.children[2].style.height = 40*oList.children.length +"px";
									this.children[1].style.float = "right";
									this.style.width = "220px"
							}
							oList.children[index-1].onmouseout = function(){
									this.children[2].style.display = "none";
									this.children[1].style.float = "none";
									this.style.width = "460px"
							}
							let oClick = document.getElementsByClassName("click")
							for(let i = 0;i<oClick.length;i++){
								oClick[i].onclick = function(e){
										var evt = e || event ;
										oTxt.value = this.innerHTML;
										return evt.cancelBubble = true;  //阻止冒泡
										
								}
							}
						}
					}
				}
				oBtn.onclick = function(){
					window.open("https://s.taobao.com/search?spm=a21bo.2017.0.0.5af911d939CHOV&q="+oTxt.value) 
				}
				window.onkeydown = function(e){
					let evt =e || event ;
					if(evt.keyCode === 13 ){
						window.open("https://s.taobao.com/search?spm=a21bo.2017.0.0.5af911d939CHOV&q="+oTxt.value)
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

$(function(){
$.ajax({
		type:"get",
		url:"demo1.json",
		async:true,
		success:function(data){
			//;
			let oDl_dt = $("#menu_dl dl");
			
			
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
			;
			let oDl_dt = $("#menu_dl dl");
			
			
			
			
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
			//;
			let oDl_dt = $("#menu_dl dl");
			//n
			
			
			
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
			//;
			let oDl_dt = $("#menu_dl dl");
			//n
			
			
			
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
			//;
			let oDl_dt = $("#menu_dl dl");
			//n
			
			
			
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
			//;
			let oDl_dt = $("#menu_dl dl");
			//n
			
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
			//;
			let oDl_dt = $("#menu_dl dl");
			//n
			
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
			//;
			let oDl_dt = $("#menu_dl dl");
			//n
			
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
