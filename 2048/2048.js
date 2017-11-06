var st=0;//开始游戏之前状态
function begin(){
//获取元素
		var a=document.querySelectorAll("a")[0];
		var a1=document.querySelectorAll("a")[1];
		var span=document.querySelectorAll("span")[0];
		var span1=document.querySelectorAll("span")[1];
//		开始界面的初始化
		span.style.display="block";
		a.style.display="none";
		span1.style.display="block";
		st=1;//玩游戏的状态

//		游戏限时
		timer=setTimeout(cale,1000);
		timer=null;
		function cale(){
			var span=document.querySelector("span");
			var n=parseInt((span.innerHTML).slice(4)-1);
			span.innerHTML=span.innerHTML.slice(0,4)+n;
			if(n>0){
				timer=setTimeout(cale,1000);
			}else{
				a1.style.display="block";
				over();
				clearTimeout(timer);
				timer:null;
			}
		}
	}
//	时间到，游戏结束
		function over(){
			var a1=document.querySelectorAll("a")[1];
			a1.style.display="block";
	}
//进入游戏界面操作
		var grade1=0;
		var grade=0;
		var allgrade=0;
//	创建4*4的表格
		var div=document.querySelector(".box");
		var ul=document.createElement("ul");
		var flag = document.createDocumentFragment();
		for(var i=0;i<16;i++){
			var li=document.createElement("li");
			flag.appendChild(li);
		}
		ul.appendChild(flag);
		div.appendChild(ul);
		var lis=document.querySelectorAll("li");
//	在随机的方格内随机产生2或者4
		function domIndex(){
			return parseInt(Math.random()*(15-0+1)+0);
		}
		function dom(){
			var random=Math.random();
				if(random<0.8){
					return 2;
				}else {
					return 4;
				}

		}
//	随机产生2或者4的函数
		function randoma(){
				var Num = domIndex();
				while(1){
//				判断空格是否为空
					if(lis[Num].innerHTML==""){
						lis[Num].innerHTML=dom();
						break;
					}else{
						Num=domIndex();
					}
				}

    		}
//	调用函数产生2或者4
    		randoma();
    		randoma();
    		modifya();
//	不同数字显示的背景和字体大小
    		function modifya(){
    			for(var s=0;s<16;s++){
    				if(lis[s].innerHTML==""){
					lis[s].style.backgroundColor="#D0AD8B";
    			}else if(lis[s].innerHTML==2){
    				lis[s].style.backgroundColor="#F8D5BE";
    				lis[s].style.fontSize="100px";
    			}else if(lis[s].innerHTML==4){
    				lis[s].style.backgroundColor="#FAB687";
    				lis[s].style.fontSize="100px";
    			}else if(lis[s].innerHTML==8){
    				lis[s].style.backgroundColor="#F6A167";
    				lis[s].style.fontSize="100px";
    			}else if(lis[s].innerHTML==16){
    				lis[s].style.backgroundColor="#F8944F";
    				lis[s].style.fontSize="80px";
    			}else if(lis[s].innerHTML==32){
    				lis[s].style.backgroundColor="#F88C41";
    				lis[s].style.fontSize="80px";
    			}else if(lis[s].innerHTML==64){
    				lis[s].style.backgroundColor="#EF8034";
    				lis[s].style.fontSize="80px";
    			}else if(lis[s].innerHTML==128){
    				lis[s].style.backgroundColor="#EB7524";
    				lis[s].style.fontSize="60px";
    				lis[s].style.textAlign="center";
    			}else if(lis[s].innerHTML==256){
    				lis[s].style.backgroundColor="#E36D1C";
    				lis[s].style.fontSize="60px";
    			}else if(lis[s].innerHTML==512){
    				lis[s].style.backgroundColor="#E76811";
    				lis[s].style.fontSize="60px";
    			}else if(lis[s].innerHTML==1024){
    				lis[s].style.backgroundColor="#F1690C";
    				lis[s].style.fontSize="40px";
    			}else if(lis[s].innerHTML==2048){
    				lis[s].style.backgroundColor="#FB6A06";
    				lis[s].style.fontSize="40px";
    			}else if(lis[s].innerHTML==4096){
    				lis[s].style.backgroundColor="#DD310F";
    				lis[s].style.fontSize="40px";
    			}
    		}
    			}
//	通过键盘上的方向键等确定li标签里面值得移动方向

//
//function sts(){
//
//}

			function upLeft(i,x,e,r){
				i=x;
					while(i>e){
						if(lis[i-r].innerHTML==""){
							lis[i-r].innerHTML=lis[i].innerHTML;
							lis[i].innerHTML="";
						}else if(lis[i-r].innerHTML==lis[i].innerHTML){
							lis[i-r].innerHTML=parseInt(lis[i].innerHTML*2);
							grade+=parseInt(lis[i].innerHTML);
							lis[i].innerHTML="";
						}
						i-=r;
					}
				}//上左键功能

			function downRight(i,x,e,r){
				i=x;
					while(i<e){
						if(lis[i+r].innerHTML==""){
							lis[i+r].innerHTML=lis[i].innerHTML;
							lis[i].innerHTML="";
						}else if(lis[i+r].innerHTML==lis[i].innerHTML){
							lis[i+r].innerHTML=parseInt(lis[i].innerHTML*2);
							grade1+=parseInt(lis[i].innerHTML);
							lis[i].innerHTML="";
						}
						i+=r;
					}//下右键功能

		}
//	判断4*4表格内是否全部都有值存在
	function sco(){
    			for(var i=0,b=0;i<16;i++){
    				 if(lis[i].innerHTML!=""){
    				b++;
    				}
    			}
    			(b!=16)?randoma():"";
    		}
//获取相对应的键盘上的按钮对应上下左右功能
	var onkeydown = function(){
		if(st==1){
			var e = window.event || arguments[0];
			if(window.event){
        		keynum = e.keyCode;
   		 	}else if(e.which){

        		keynum = e.which;
    		}
		if(keynum==38||keynum==87||keynum==104){					//键盘上键功能
			for(var x=4,i=0;x<16;x+=1){
				upLeft(i,x,3,4);
		}
    	sco();
    	modifya();
		}else if(keynum==40||keynum==83||keynum==98){			//下键功能
			for(var x=12,i=0;x>=0;x--){
				downRight(i,x,12,4)
		}
    	sco();
    	modifya();
		}else if(keynum==37||keynum==65||keynum==100){					//左键功能
			for(var x=0,i=0;x<4;x++){
				upLeft(i,x,0,1);
			}
				for(var x=4,i=0;x<8;x++){
					upLeft(i,x,4,1);
			}
				for(var x=8,i=0;x<12;x++){
					upLeft(i,x,8,1);}
				for(var x=12,i=0;x<16;x++){
					upLeft(i,x,12,1);
			}
    	sco();
    	modifya();
		}else if(keynum==39||keynum==68||keynum==102){					//右键功能
			for(var x=3,i=0;x>=0;x--){
				downRight(i,x,3,1);
			}
				for(var x=7,i=0;x>=4;x--){
					downRight(i,x,7,1);
			}
				for(var x=11,i=0;x>=8;x--){
					downRight(i,x,11,1);
			}
				for(var x=15,i=0;x>=12;x--){
					downRight(i,x,15,1);
			}
    	sco();
    	modifya();
		}
	for(var i=0,j=0;i<16;i++){
		if(lis[i].innerHTML!=""){
			j++;
		}
	}
//		判断各个数字之间是否还能进行合并
	if(j==16){if(lis[0].innerHTML!=lis[1].innerHTML&&lis[0].innerHTML!=lis[4].innerHTML &&  lis[3].innerHTML!=lis[2].innerHTML&&lis[3].innerHTML!=lis[7].innerHTML&& lis[12].innerHTML!=lis[8].innerHTML&&lis[12].innerHTML!=lis[13].innerHTML &&  lis[15].innerHTML!=lis[14].innerHTML&&lis[15].innerHTML!=lis[11].innerHTML && lis[4].innerHTML!=lis[8].innerHTML&&lis[4].innerHTML!=lis[5].innerHTML && lis[8].innerHTML!=lis[9].innerHTML && lis[1].innerHTML!=lis[2].innerHTML&&lis[1].innerHTML!=lis[5].innerHTML &&lis[2].innerHTML!=lis[6].innerHTML&&lis[7].innerHTML!=lis[11].innerHTML&&lis[7].innerHTML!=lis[6].innerHTML&&lis[11].innerHTML!=lis[10].innerHTML&&lis[13].innerHTML!=lis[14].innerHTML&&lis[13].innerHTML!=lis[9].innerHTML&&lis[14].innerHTML!=lis[10].innerHTML &&lis[5].innerHTML!=lis[6].innerHTML&&lis[5].innerHTML!=lis[9].innerHTML &&lis[6].innerHTML!=lis[10].innerHTML&&lis[9].innerHTML!=lis[10].innerHTML){
//		如果全部4*4表格铺满数字且不能合并时游戏结束，清除定时器
		var a1=document.querySelectorAll("a")[1];
			a1.style.display="block";
				over();
				clearTimeout(timer);
				timer:null;
			}
		}
//		当合并出2048时弹框，并且点击表格继续
		for(var i=0,j=0;i<16;i++){
		if(lis[i].innerHTML==2048){
			clearTimeout(timer);
				timer=null;
				alert("哎呦，可以啊！2048了。加油!4096有惊喜哦");
		}
	}
//当合并出4096时弹框，并且点击表格继续
	for(var i=0,j=0;i<16;i++){
		if(lis[i].innerHTML==4096){
			clearTimeout(timer);
				timer=null;
				alert("系统崩溃！");
				location.reload();
		}
	}
//		当达到一定分数时进行的操作
		var p=document.querySelectorAll("p")[0];
		p.style.display="block";
		allgrade=parseInt(grade)+parseInt(grade1);
		p.innerHTML=allgrade;
		// if(p.innerHTML>20){
		// 	alert("系统崩溃");
		// }
		}
	}