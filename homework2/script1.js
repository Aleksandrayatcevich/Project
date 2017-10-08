function Made(s,p) {
    var n = prompt("Введите количество элементов массива");
    var min = s-((s*p)/100); 
    var max = s+s*p/100;
    var Sum=0;
    var arr=new Array(n);
  
    for(var i=0; i<n; i++){
      arr[i]=Math.round((min + Math.random() * (max + 1 - min))*1000)/1000;
      Sum+=arr[i];
      document.write(arr[i] +';  ');
    }    
    return Sum/n;
}

var s=Number(prompt('Введите среднее значение'));
var p=Number(prompt('Введите отклонение'));

var sr=Made(s,p);
document.write("  Среднее значение равно "+sr.toFixed(0));
