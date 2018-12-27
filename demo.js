function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

window.onload=function(){
	var cover=document.getElementsByClassName('cover')[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		if(st>100){
			cover.style.position='fixed'
		}else{
			cover.style.position='static'
		}
	}
}



		var box = document.getElementById('box');
		var oNavlist = document.getElementById('nav').children;
		//console.log(oNavlist.length);
		var slider = document.getElementById('slider');
		var left = document.getElementById('left');
		var right = document.getElementById('right');
		var index = 1;
		var timer;
		var isMoving = false;
		box.onmouseover = function(){
			animate(left,{opacity:100})
			animate(right,{opacity:100})
			clearInterval(timer);
		}//左右箭头在鼠标划入的时候显示，并且关闭定时器
		box.onmouseout = function(){
			animate(left,{opacity:0})
			animate(right,{opacity:0})
			timer = setInterval(next, 3000);
		}//左右箭头在鼠标画出的时候消失，图片继续按计时器播放
		right.onclick = next;
		left.onclick = prev;
		for( var i=0; i<oNavlist.length; i++ ){
			oNavlist[i].index = i;
			oNavlist[i].onclick = function(){
				index = this.index+1;
				navmove();
				animate(slider,{left:-800*index});
			}
		}//点击下面的小图标会跳转到相应的页面
		function next(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider,{left:-800*index},function(){
				if(index==7){
					slider.style.left = '-800px';
					index = 1;
				}
				isMoving = false;
			});
		}
		function prev(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index--;
			navmove();
			animate(slider,{left:-800*index},function(){
				if(index==0){
					slider.style.left = '-4800px';
					index = 6;
				}
				isMoving = false;
			});
		}
		function navmove(){
			for( var i=0; i<oNavlist.length; i++ ){
				oNavlist[i].className = "";
			}
			if(index >6 ){
				oNavlist[0].className = "active";
			}else if(index<=0){
				oNavlist[5].className = "active";
			}else {
				oNavlist[index-1].className = "active";
			}
		}
		timer = setInterval(next, 3000);
//号码
		 var jia=document.getElementById("jia");
		 var jiage=document.getElementById("jiage");
		 jiage.innerHTML="￥"+jia.children[0].text;
		 jia.onchange=function(){
		// var index=jia.selectedIndex;
			 
			 for(var i=0;i<jia.length;i++){
			 	if(jia[i].selected==true){
			 		jiage.innerHTML="￥"+jia.children[i].text;
			 	}
			 }
		}
		
//浏览器右侧的伸缩图
var xxie=document.getElementsByClassName("xxie");
var xie=document.getElementsByClassName("xie");
var youhui=document.getElementsByClassName("youhui");
var zuhe=document.getElementsByClassName("zuhe");
var cart=document.getElementsByClassName("cart");
xxie[0].onmouseover=function(){
	animate(xxie[0],{right:-26});
	animate(xie[0],{right:-22});
}
xie[0].onmouseover=function(){
	animate(xie[0],{right:-22});
	animate(xxie[0],{right:-26});
}
youhui[0].onmouseover=function(){
	animate(youhui[0],{right:0});
}
zuhe[0].onmouseover=function(){
	animate(zuhe[0],{right:0});
}
cart[0].onmouseover=function(){
	animate(cart[0],{right:-22});
}
//滑出
xxie[0].onmouseout=function(){
	animate(xxie[0],{right:-85});
	animate(xie[0],{right:-80});
}
xie[0].onmouseout=function(){
	animate(xie[0],{right:-80});
	animate(xxie[0],{right:-85});
}
youhui[0].onmouseout=function(){
	animate(youhui[0],{right:-58});
}
zuhe[0].onmouseout=function(){
	animate(zuhe[0],{right:-58});
}
cart[0].onmouseout=function(){
	animate(cart[0],{right:-80});
}
//公告
var dgao=document.getElementsByClassName("dgao");
		var scr1=document.getElementById("scr1");
		var scr2=document.getElementById("scr2");

		scr2.innerHTML=scr1.innerHTML;
		function roll() {
             if(scr2.offsetHeight - dgao[0].scrollTop <= 0) {
                 //dgao[0].scrollTop -= scr1.offsetHeight;
                 dgao[0].scrollTop=0;
              } else {
                dgao[0].scrollTop++;
             }
        }
        var StopRoll = setInterval(roll, 30);

        dgao[0].onmouseover = function () {
            clearInterval(StopRoll);
        }
        dgao[0].onmouseout = function () {
            StopRoll = setInterval(roll, 30);
        }



