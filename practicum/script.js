/*Задание таблицы */
var i=1;
var b1=document.getElementById("1");
b1.addEventListener("click", function(){
	var str = document.createElement('tr');
var st1 = document.createElement('td');
st1.innerHTML=1+i;
var st2 = document.createElement('td');
st2.innerHTML = "<input type='number' name='2' id='znach'>";
var st3=document.createElement('td');
st3.innerHTML = "<button type='button' id='but'> Удалить</button>";
var but=document.getElementById("but");
but=st3.children[0];
but.addEventListener("click", function(){
	this.parentNode.parentNode.remove();
})
var st4=document.createElement('td');
st4.innerHTML = '<input type="color" class="ch" value="#000000">';
function a(){
	ch.value;
}
document.getElementById('tab').children[0].appendChild(str);
str.appendChild(st1);
str.appendChild(st2);
str.appendChild(st3);
str.appendChild(st4);
i++;
})


	var znach=document.getElementById("znach");
	var bb=document.getElementById("bb");
	
	
/* Диаграмма*/
var a=document.getElementById("gis");
var b=document.getElementById("n");
var ch=document.getElementsByClassName("ch");

	bb.onclick=function(e){
		var maxHei=0;
		var tab=document.getElementById("tab");
		tab=tab.children[0];
		var arr=[];
		for(var i=0; i<tab.children.length;i++){
			var tr=tab.children[i];
			znach=tr.children[1].children[0];
			arr[i]=znach.value;
		} 
		a.innerHTML = "  ";

		for (var i = 0; i < arr.length; i++) {
			if (Number(arr[i])>maxHei){
				maxHei=arr[i];
			}
		}

		
        arr.forEach(function aa(s,j){
			var div = document.createElement("div");
			
		
			
			div.style.position="relative";
			//div.style.height="0";
				
			div.style.width = "20px";
			div.style.display = "inline-block";
			div.style.content="10";
			div.style.margin="10px";
			div.style.backgroundColor=ch[j].value;
			//div.style.height=(s*295)/maxHei+"px"
				var heig=0;
			var ifa=setInterval(frame,50);
				function frame(){
				if(heig==s){
					clearInterval(ifa);

				} else {
					heig++;
					div.style.height = (heig*295)/maxHei+"px";

				}
			}		
		div.addEventListener("mouseover",function(e){
			var qq=document.createElement("div");
			e.target.appendChild(qq);
			qq.style.position="absolute"
			qq.style.top=0+"px";
			qq.style.left=20+"px";
			qq.innerHTML='<font color="black" style="background:#CCFFCC;">'+s+'</font>';
		})
		div.addEventListener("mouseout",function(e){
			e.target.innerHTML=""
			
		})
			a.appendChild(div);
		

		})

		}
		
	



	




