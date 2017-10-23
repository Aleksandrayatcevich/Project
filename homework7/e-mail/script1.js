var in1=document.getElementById("d");
var b1=document.getElementById("1")
var e=/^[a-zA-Z\_0-9\-]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,10}$/;

b1.addEventListener("click",function(){
     if (e.test(in1.value)){
         alert("введено верно");
}
         
     
      else{
        alert("Введено неверное")
    }}
)

