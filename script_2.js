function mn (arr){
	var summ = 0;
	var x1 = arr.length-1;
  for (var i = 0; i < arr.length; i++){
    summ += arr[i] * Math.pow(x1,i)
	}
  return summ;
  
}

var arr = prompt("Введите элементы массива через пробел ").split(" ");
arr.push = (prompt("введите х"));
document.write ('Значение этого многочлена равен ' + mn(arr));
 
