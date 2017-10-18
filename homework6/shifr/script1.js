var b1=document.getElementById("1");
var b2=document.getElementById("2");
var in1=document.getElementById("sh");
var in2=document.getElementById("desh");
var cl=document.getElementById("clear");
var cl1=document.getElementById("clear1");
var cl2=document.getElementById("clear2");

b1.onclick=function(){
    var a=in1.value;
    var b=a.replace(/[a\а]/g, "%");
    in2.value=b;
}
b2.onclick=function(){
    var c=in2.value;
    var d=c.replace(/%/g, "a");
    in1.value=d;
}

cl.onclick=function(){
    in1.value='';
    in2.value='';
}
cl1.onclick=function(){
    in1.value='';
}
cl2.onclick=function(){
    in2.value='';
}