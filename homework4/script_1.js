/*zadanie2*/
var str = prompt('vvedite str');
var re = (/^(\+375|80|8 0|375)(29|25|44|33)( |-|)(\d{3})( |-|)(\d{2})( |-|)(\d{2})$/);
if(re.test(str)){
    var a=str.replace(re);
    document.write(a);
}
else  document.write("nomera net");


