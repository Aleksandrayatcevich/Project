var ch1 = document.getElementById("ch1");
var ch2 = document.getElementById("ch2");
var ot = document.getElementById("ot");
var min = document.getElementById("-");
var plus = document.getElementById("+");
var ymn = document.getElementById("*");
var del = document.getElementById("/");
var cl=document.getElementById("clear");
var zap=document.getElementById("zap");
var paste=document.getElementById("paste");
var paste1=document.getElementById("paste1");

min.onclick=function(){
    var a=Number(ch1.value);
    var b=Number(ch2.value);
    ot.value=a-b;
}
plus.onclick=function(){
    var a=Number(ch1.value);
    var b=Number(ch2.value);
    ot.value=a+b;
}
ymn.onclick=function(){
    var a=Number(ch1.value);
    var b=Number(ch2.value);
    ot.value=a*b;
}
del.onclick=function(){
    var a=Number(ch1.value);
    var b=Number(ch2.value);
    ot.value=a/b;
}
cl.onclick=function(){
    ch2.value='';
    ch1.value='';
    ot.value='';
}
zap.onclick=function (){
    var a=Number(ot.value);
    paste.onclick=function(){
        ch1.value=a;
    }
    paste1.onclick=function(){
        ch2.value=a;
    }
}
